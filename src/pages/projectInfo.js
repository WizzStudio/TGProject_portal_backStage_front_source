import React from 'react';
import PropTypes from 'prop-types';
import {observer, inject} from 'mobx-react';
import {getProjectById} from '../service/API'
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import {parseTime} from '../common/scripts/utils'


const infoStyle={
  boxPadding:{
    padding:"20px"
  }
};



@inject('appState')
@observer
class projectInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      info:{
        "id": 3,
        "projectName": "基于大数据的医疗数据分析系统",
        "leaderId": 7,
        "startDate": 1511280000000,
        "finishedDate": 1513008000000,
        "members": [
          {
            "id": 6,
            "username": "王星锦",
            "college": "软件工程",
            "departmentId": 1,
            "projectId": 3,
            "avatar": "http://dysmorsel2.oss-cn-hangzhou.aliyuncs.com/TG/avatar8.svg",
            "introduction": "TG工作室PHP组组长",
            "tag": "[\"哲学\",\"王比利\",\"眼睛很大\"]",
            "gender": 1,
            "age": 20
          }
        ],
        "sourceUrl": "https://github.com/TGclub",
        "frontProgress": 0,
        "backProgress": 0,
        "totalProgress": 0,
        "introduction": "对海量的医疗信息和数据进行分析和采集，通过集群计算，为医疗行业提供更加专业更加可靠的数据支撑，从而提供高效而准确的医疗手段和策略 ",
        "picUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511249995682&di=cd4f49399896958a9f203c2b29ae550f&imgtype=0&src=http%3A%2F%2Fwww.36dsj.com%2Fwp-content%2Fuploads%2F2015%2F03%2F514.jpg",
        "categories": null,
        "uiprogress": 0
      }
    }
  }
  
  componentWillMount(){
    if(!this.props.appState.projectId){
      return this.props.history.push('/projects')
    }
    getProjectById(this.props.appState.projectId).then(data =>{
      this.setState({
        info:data
      })
    })
  }
  
  handleChange=key=>event =>{
    // console.log(event.target.value)
    this.setState({
      info:Object.assign({
        [key]:event.target.value
      })
    })
  };
  
  renderInput = (keyName,label)=>(
    <TextField
      id={keyName}
      label={label}
      value={this.state.info[keyName]}
      onChange={this.handleChange(`${keyName}`)}
      margin="normal"
      fullWidth
    />
  )
  
  render (){
    return (
      <div style={infoStyle.boxPadding}>
        {this.renderInput('projectName','项目名')}
        <br/>
        {this.renderInput('introduction','项目介绍')}
        <br/>
        {this.renderInput('leaderId','项目负责人Id')}
        <br/>
        {this.renderInput('startDate','开始时间')} {/*date*/}
        <br/>
        {this.renderInput('finishedDate','结束时间')} {/*date*/}
        <br/>
        {this.renderInput('sourceUrl','仓库地址')}
        <br/>
        {this.renderInput('frontProgress','前端进度')}
        <br/>
        {this.renderInput('backProgress','后端进度')}
        <br/>
        {this.renderInput('uiProgress','UI进度')}
        <br/>
        {this.renderInput('totalProgress','总进度')}
        <br/>
        {this.renderInput('picUrl','图片链接')}
        <br/>
        {this.renderInput('categories','分类')} {/*list*/}
        <br/>
        {this.renderInput('members','成员')} {/*list*/}
        <br/>
        
      </div>
    )
  }
}


projectInfo.propTypes={
  data:PropTypes.array
}

export default projectInfo
