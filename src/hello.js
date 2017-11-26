import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import Button from 'material-ui/Button';


@inject('appState')
@observer
export class Hello extends Component {
  constructor(props) {
    super(props)
  }
  
  /*在渲染前调用*/
  componentWillMount() {
  }
  
  /*在第一次渲染后调用*/
  componentDidMount() {
  }
  
  /*在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用*/
  componentWillReceiveProps() {
  }
  
  handleClick = () => {
    window.api.getDepartmentById(1).then((res)=>{
      // console.log(res)
    }).catch((err)=>{
    })
    // this.props.appState.countUP()
    // console.log(window.api.getAllMember)
  }
  
  
  /*渲染函数*/
  render() {
    return (
      <div>
        <Button raised onClick={this.handleClick}>
          {this.props.appState.testCount}
        </Button>
      </div>
    );
  }
}
