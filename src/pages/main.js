import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {BrowserRouter as Router, Route, Switch,Prompt} from 'react-router-dom';


/* components */
import NavBar from "../components/navbar"


/* pages */
import {Hello} from '../hello.js';
import {departments} from "../pages/departments";
import {login} from "../pages/login";
import {projects} from "../pages/projects";
import {members} from "../pages/members";



@inject('appState')
@observer
export class main extends Component {
 
	constructor(props) {
		super(props)
		this.state = {
		  
    }
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
        <Switch>
          <Route component={login} path="/login"/>
          <Route component={departments} path="/departments"/>
          <Route component={projects} path="/projects"/>
          <Route component={members} path="/members"/>
          <Route component={Hello} path="/hello"/>
        </Switch>
      </div>
    );
  }
}
