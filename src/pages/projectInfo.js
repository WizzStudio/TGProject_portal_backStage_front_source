import React from 'react';
import PropTypes from 'prop-types';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import {observer, inject} from 'mobx-react';
import {getProjectById, getAllMember, updateProjInfo, createProject} from '../service/API'
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Member from '../components/cards/member'
import AddIcon from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import Categories from '../components/categories/categoriePicker'
import { LinearProgress } from 'material-ui/Progress';

const infoStyle = {
  boxPadding: {
    padding: "20px"
  },
  boxBorder: {
    border: "1px solid #b3b3b3"
  },
  absolute: {
    flip: false,
    position: 'fixed',
    bottom: 32,
    right: 32,
  },
};

let departmentFilter = (id) => {
  switch (id) {
    case 1:
      return '工程师';
    case 2:
      return '设计师';
    case 3:
      return '产品';
  }
}


@inject('appState')
@observer
class projectInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        // "id": 3,
        "projectName": "",
        "leaderId": '',
        "startDate": 0,
        "finishedDate": 0,
        "members": [],
        "sourceUrl": "",
        "frontProgress": 0,
        "backProgress": 0,
        "totalProgress": 0,
        "introduction": "",
        "picUrl": "",
        "categories": [],
        "uiprogress": 0
      },
      startDate: null,
      endDate: null,
      membersList: [],
      cateList: [
        {}
      ],
      completed:0
    }
  }
  
  
  // 删除成员
  popMember = (id) => {
    // 状态机特性，保存改变状态前的状态 状态目前是原子性改变，保存上一步的状态进行改变，然后统一去触发视图更新
    let preInfo = this.state.info;
    for (let i = 0; i < preInfo.members.length; ++i) {
      if (preInfo.members[i].id === id) {
        preInfo.members.splice(i, 1)
      }
    }
    this.setState({
      info: preInfo
    })
  };
  
  // 添加成员
  addMember = (member) => {
    for (let item of this.state.info.members) {
      if (member.id === item.id) {
        return console.log('已有该成员')
      }
    }
    let tempState = this.state.info
    tempState.members.push(member);
    
    this.setState({
      info: tempState
    })
  };
  
  // 删除分类
  delCate = (cateItem) => {
    let _tempState = this.state.info;
    this._hasCate(cateItem, (index) => {
      _tempState.categories.splice(index, 1)
    })
    this.setState({
      info: _tempState
    })
  };
  
  
  // 添加分类
  addCate = (cateItem) => {
    if (this._hasCate(cateItem)) {
      return console.log("已经有该分类")
    } else {
      let _modifyInfo = this.state.info
      this.state.info.categories.push(cateItem)
      this.setState({
        info: _modifyInfo
      })
    }
    
    
  };
  
  // 判断是否已经有该分类
  _hasCate = (cateItem, fn = () => {
  }) => {
    // for (let item of this.state.info.categories) {
    for (let i = 0; i < this.state.info.categories.length; ++i) {
      if (cateItem.id === this.state.info.categories[i].id) {
        fn(i);
        return 1
      }
    }
    return 0
  };
  
  // 渲染列表
  _renderList = (api, listState, fn = () => {
  }) => {
    api().then((data) => {
      this.setState({
        [listState]: data
      }, function () {
        fn()
      })
    })
  };
  
  
  _parseTime = () => {
    // let preState = this.state.info;
    // preState.startDate = +new Date(this.state.startDate);
    // preState.endDate = +new Date(this.state.endDate);
    
    
    // this.setState(preState => ({
    //   info: {...preState, startDate: +new Date(this.state.info.startDate), endDate: +new Date(this.state.info.endDate)}
    // }))
    
    let preState = this.state.info;
    if (!this.state.startDate || !this.state.endDate) {
      return false
    }
    // console.log(this.state.endDate._d);
    // console.log(+new Date(this.state.endDate._d));
    preState.startDate = +new Date(this.state.startDate._d);
    preState.finishedDate = +new Date(this.state.endDate._d);
    
    
    this.setState({
      info: preState
    })
  };
  
  
  componentWillMount() {
    this.setState({
      completed:20
    });
    if (!this.props.appState.projectId) {
      return this.props.history.push('/projects')
    }
    
    if (this.props.appState.projectId !== -9) {
      getProjectById(this.props.appState.projectId).then(data => {
        this.setState({
          info: data
        });
        this.setState({
          completed:60
        });
        this._renderList(getAllMember, 'membersList',()=>{
          this.setState({
            completed:100
          });
        })
        
        
      })
    }else {
      /*渲染人员列表*/
      this._renderList(getAllMember, 'membersList',()=>{
        this.setState({
          completed:100
        });
      })
    }
    
  
    
  }
  
  
  chooseCate = (data) => {
    console.log(data)
  }
  
  handleChange = key => event => {
    // console.log(event.target.value)
    let preInfo = this.state.info
    preInfo[key] = event.target.value
    
    this.setState({
      info: preInfo
    })
  };
  
  
  // 渲染输入框
  renderInput = (keyName, label) => (
    <TextField
      id={keyName}
      label={label}
      value={this.state.info[keyName] || ''}
      onChange={this.handleChange(`${keyName}`)}
      margin="normal"
      fullWidth
    />
  );
  
  updateInfo = () => {
    this._parseTime();
    if (this.props.appState.projectId === -9) {
      /*创建项目*/
      createProject(this.state.info)
    } else {
      /*更新项目*/
      console.log(this.state.info.id, this.state.info)
      updateProjInfo(this.state.info.id, this.state.info);
    }
    
  };
  
  
  renderMemberItem = (memberList) => (
    <List>
      {memberList.map(n => (
        <ListItem button style={infoStyle.boxBorder} onClick={this.addMember.bind(this, n)}>
          <ListItemText primary={n.username + "--" + departmentFilter(n.departmentId) + "-id-:" + n.id}/>
        </ListItem>
      ))}
    </List>
  );
  
  render() {
    return (
      <div style={infoStyle.boxPadding}>
        {/*进度条*/}
        <LinearProgress mode="determinate" value={this.state.completed} />
        <br/>
        
        {this.renderInput('projectName', '项目名')}
        <br/>
        {this.renderInput('introduction', '项目介绍')}
        <br/>
        
        <Grid container spacing={24} justify="center">
          <Grid item lg={6}>
            {this.renderInput('leaderId', '项目负责人Id')}
          </Grid>
          <Grid item lg={6}>
            <p>开始时间和结束时间</p>
            <p>{this.state.info.startDate}</p>
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              onDatesChange={({startDate, endDate}) => this.setState({
                startDate, endDate
              })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({focusedInput})} // PropTypes.func.isRequired,
              startDateId={'1'}
              endDateId={'2'}
              showDefaultInputIcon={true}
            />
          </Grid>
        </Grid>
        <br/>
        {/*{this.renderInput('startDate','开始时间')} /!*date*!/*/}
        {/*<br/>*/}
        {/*{this.renderInput('finishedDate','结束时间')} /!*date*!/*/}
        <br/>
        {this.renderInput('sourceUrl', '仓库地址')}
        <br/>
        {this.renderInput('frontProgress', '前端进度')}
        <br/>
        {this.renderInput('backProgress', '后端进度')}
        <br/>
        {this.renderInput('uiProgress', 'UI进度')}
        <br/>
        {this.renderInput('totalProgress', '总进度')}
        <br/>
        {this.renderInput('picUrl', '图片链接')}
        <br/>
        
        {/*分类*/}
        <p>分类</p>
        <Categories clickFn={this.chooseCate} type="display" delFn={this.delCate} cate={this.state.info.categories}/>
        <Categories clickFn={this.addCate} type="picker"/>
        
        <Grid container spacing={8}>
          <Grid item lg={8}>
            <Grid container spacing={8}>
              {this.state.info.members.map(n => (
                <Grid item lg={2}>
                  {Member(n, this.popMember)}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <p>添加成员</p>
            {this.renderMemberItem(this.state.membersList)}
          </Grid>
        </Grid>
        
        
        <Tooltip placement="bottom" title={this.props.appState.projectId === -9?"新建项目":"提交修改"}>
          <Button fab color="accent" style={infoStyle.absolute} onClick={this.updateInfo}>
            <AddIcon/>
          </Button>
        </Tooltip>
      
      
      </div>
    )
  }
}


projectInfo.propTypes = {
  data: PropTypes.array
}

export default projectInfo
