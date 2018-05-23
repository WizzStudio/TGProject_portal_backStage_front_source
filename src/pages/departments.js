import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('appState')
@observer
export class departments extends Component {
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
  
  Test = () => (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );
  
  /*渲染函数*/
  render() {
    return (
      <div>
        {/*<Test></Test>*/}
        department
      </div>
    );
  }
}
