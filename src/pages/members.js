import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import FolderIcon from 'material-ui-icons/Folder';
import ExtensionIcon from 'material-ui-icons/Extension';
import GavelIcon from 'material-ui-icons/Gavel';
import RedeemIcon from 'material-ui-icons/Redeem'
import BottomNavigation, {BottomNavigationButton} from 'material-ui/BottomNavigation';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import {getAllMember, getMemberById, updateMemberInfo, getMembersByDepartmentId} from '../service/API'
import MemberTable from '../components/tables/memberTable'


@inject('appState')
@observer
export class members extends Component {
  constructor(props) {
    super(props)
    this.state = {
      memberLists: [],
      nowFocus: 0
    }
  }
  
  renderTable = (id) => {
    if (parseInt(id) === 0) {
      getAllMember().then(res => {
        // console.log(res)
        this.setState({memberLists: res})
      })
    } else  {
      getMembersByDepartmentId(id).then((res) => {
        // console.log(res)
        this.setState({memberLists: res.members})
      })
    }

  };
  
  changeMemberType = (event, value) => {
    this.setState({nowFocus: value});
    this.renderTable(value)
  };
  
  /*在渲染前调用*/
  componentWillMount() {
    getAllMember().then(res => {
      // console.log(res)
      this.setState({memberLists: res})
    })
  }
  
  /*在第一次渲染后调用*/
  componentDidMount() {
  }
  
  delMember = (id) => {}
  
  getMemberInfo = (id) =>{
    getMemberById(id).then(res => {
      console.log(res)
    })
  }
  
  /*渲染函数*/
  render() {
    return (
      <div>
        <br/>
        <BottomNavigation value={this.state.nowFocus} onChange={this.changeMemberType}>
          <BottomNavigationButton label="全部成员" value={0} icon={<RestoreIcon/>}/>
          <BottomNavigationButton label="技术部" value={1} icon={<GavelIcon/>}/>
          <BottomNavigationButton label="设计部" value={2} icon={<RedeemIcon/>}/>
          <BottomNavigationButton label="产品运营部" value={3} icon={<FavoriteIcon/>}/>
        </BottomNavigation>
        <br/>
        
        <MemberTable memberList={this.state.memberLists} enterFunc={this.getMemberInfo} delFunc={this.delMember}/>
      </div>
    );
  }
}
