import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import {BrowserRouter as Router, Route, Switch,Prompt} from 'react-router-dom';

import {login} from "../pages/login";

@inject('appState')
@observer
export class main extends Component {
	constructor(props) {
		super(props)
		this.state = {}
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
        this is main
        <Switch>
          <Route component={login} path="/login"/>
        </Switch>
      </div>
    );
  }
}
