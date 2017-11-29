import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import Tabs, {Tab} from 'material-ui/Tabs';

/*ICONS*/
import People from 'material-ui-icons/People';
import ViewQuilt from 'material-ui-icons/ViewQuilt';
import ArrowForward from 'material-ui-icons/ArrowForward';
import Airplay from 'material-ui-icons/Airplay';

/*COLORS*/
import {orange, grey} from 'material-ui/colors';

const primary = orange[500]; // #F44336
const accent = grey[800]; // #E040FB

export default class navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: window.util.getSession('hover_id')||0,
    };
  }
  
  static contextTypes = {
    // 子组件获取context
    history: PropTypes.object
  };
  
  handleChange = (event, value) => {
    this.setState({value});
    window.util.setSession('hover_id',value);
    switch (value) {
      case 0:
        this.context.history.push('/departments');
        break;
      case 1:
        this.context.history.push('/members');
        break;
      case 2:
        this.context.history.push('/projects');
        break;
      case 3:
        this.context.history.push('/login');
        break;
    }
    
  };
  
  goRoute = (val) => {
    this.context.history.push(val)
  }
  
  render() {
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor={primary}
          textColor={accent}
        >
          <Tab icon={<ViewQuilt/>} label="部门管理"/>
          <Tab icon={<People/>} label="成员管理"/>
          <Tab icon={<Airplay/>} label="项目管理"/>
          <Tab icon={<ArrowForward/>} label="登录"/>
        </Tabs>
        {/*<Link to={"/login"}> 333 </Link>*/}
      </Paper>
    );
  }
}

