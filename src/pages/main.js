import React, {Component} from 'react';
import { hashHistory } from 'react-router';
import PropTypes from 'prop-types';
import {observer, inject} from 'mobx-react';
import {Route, Switch,Prompt} from 'react-router-dom';


/* 注入组件 */
import NavBar from "../components/navbar"

/* 注入路由 */
import Router2 from '../router/mainRouter'



@inject('appState')
@observer
export class main extends Component {
 
	constructor(props) {
		super(props);
		this.state = {
    }
	}
  
	
  static childContextTypes = {
    history: PropTypes.object
  };
	
	/*给props 挂载history变量 */
  getChildContext () {
    return { history: this.props.history }
  }
  
  
  /*在渲染前调用*/
	componentWillMount() {
	}
	
	/*在第一次渲染后调用*/
	componentDidMount() {
	}
	
	
	/*渲染函数*/
	render() {
		return (
			<div>
        <NavBar/>
        <Router2/>
      </div>
    );
  }
}
