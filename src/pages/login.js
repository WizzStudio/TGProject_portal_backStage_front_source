import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

/* 样式 */
import "../common/styles/pages/login.scss"

@inject('appState')
@observer
export class login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  test(){
    return <div>hello world</div>
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
      <div style={{backgroundImage:`url('../assets/images/banner.jpg')`}} className="login-box" >
        <Grid  container className="login-main" >
          <Grid item  sm={6} className="login-main-login">
            <Paper>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
