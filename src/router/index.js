import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Bundle from '../router/bundle'; /*TODO:以后使用懒加载*/

import {Hello} from '../hello.js';


/*TODO:以后使用懒加载*/
// const AppPage = (props) => (
//   <Bundle load={() => import('../hello.js')}>
//     {(AppPage) => <AppPage {...props}/>}
//   </Bundle>
// );


const RouteConfig = () => (
  <Router>
    <Switch>
      <Route component={Hello} path="/test" />
    </Switch>
  </Router>
)


export default RouteConfig;
