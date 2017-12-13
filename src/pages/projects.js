import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import PropTypes from 'prop-types';
import ProjectTable from '../components/tables/projTable'
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import FolderIcon from 'material-ui-icons/Folder';
import ExtensionIcon from 'material-ui-icons/Extension';
import GavelIcon from 'material-ui-icons/Gavel';
import RedeemIcon from 'material-ui-icons/Redeem'
import {getProjectByCate} from '../service/API'

@inject('appState')
@observer
export class projects extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  projects:[],
      nowFocus:1
    }
	}
  
  renderTable = (cateId) =>{
    getProjectByCate(cateId).then((res)=>{
      this.setState({projects:res.projects})
    })
  };
	
	/*在渲染前调用*/
	componentWillMount() {
    this.renderTable(this.state.nowFocus)
	}
	
	/*在第一次渲染后调用*/
	componentDidMount() {
	}
 
	getProjectInfo=()=>(id)=>{
	  console.log(id)
  }
  
  changeProjectType = (event, value) => {
    this.setState({ nowFocus:value });
    this.renderTable(value)
  };
	
	/*渲染函数*/
	render() {
		return (
			<div>
        <br/>
        <BottomNavigation value={this.state.nowFocus} onChange={this.changeProjectType}>
          <BottomNavigationButton label="进行中" value={1} icon={<RestoreIcon />} />
          <BottomNavigationButton label="已完成" value={2} icon={<GavelIcon />} />
          <BottomNavigationButton label="精品陈列" value={3} icon={<RedeemIcon />} />
          <BottomNavigationButton label="创意" value={4} icon={<FavoriteIcon />} />
          <BottomNavigationButton label="微项目" value={5} icon={<LocationOnIcon />} />
          <BottomNavigationButton label="闲逛" value={6} icon={<FolderIcon />} />
        </BottomNavigation>
        <br/>
        <ProjectTable projectList={this.state.projects} enterFunc={this.getProjectInfo}/>
			</div>
		);
	}
}
