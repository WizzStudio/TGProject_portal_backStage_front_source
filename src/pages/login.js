import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import {FormControl, FormHelperText} from 'material-ui/Form';
import {login as loginByName} from '../service/API'

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

/* 样式 */
import "../common/styles/pages/login.scss"

@inject('appState')
@observer
export class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }
  
  
  /*在渲染前调用*/
  componentWillMount() {
  }
  
  /*在第一次渲染后调用*/
  componentDidMount() {
  
  }
  
  handleChange = name => event => {
    // 高阶函数
    this.setState({
      [name]: event.target.value
    })
  };
  
  loginRequest = () => {
    loginByName(this.state.name, this.state.password).then(res => {
      if (!parseInt(res.status)) {
        alert('登录成功')
        this.props.history.push('/projectInfo')
      }
    })
  };
  
  /*渲染函数*/
  render() {
    return (
      <div style={{backgroundImage: `url('../assets/images/banner.jpg')`}} className="login-box">
        <Grid container className="login-main">
          <Grid item sm={6} className="login-main-login">
            <Paper className="login-main-login-bar">
              <TextField
                id="name"
                label="用户名"
                type="text"
                margin="normal"
                onChange={this.handleChange('name')}
                value={this.state.name}
              />
              
              <TextField
                id="password"
                label="密码"
                type="password"
                margin="normal"
                onChange={this.handleChange('password')}
                value={this.state.password}
              />
              
              <Button raised color="primary" onClick={this.loginRequest}>
                登录
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
