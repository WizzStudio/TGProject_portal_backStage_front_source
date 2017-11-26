import React from 'react';
import {BrowserRouter as Router, Route, Switch,Prompt} from 'react-router-dom';
// import Bundle from '../router/bundle'; /*TODO:以后使用懒加载*/

import {Hello} from '../hello.js';
import {departments} from "../pages/departments";
import {login} from "../pages/login";
import {main} from "../pages/main";
import {members} from "../pages/members";
import {notFound} from "../pages/notFound";
import {projects} from "../pages/projects";
import {error} from "../pages/error";


/*TODO:以后使用懒加载*/
// const AppPage = (props) => (
//   <Bundle load={() => import('../hello.js')}>
//     {(AppPage) => <AppPage {...props}/>}
//   </Bundle>
// );


const RouteConfig = () => (
  <Router>
    <switch>
      <Route  component={main} path="/" />
      <Route  component={notFound} path="/notFound" />
      <Route  component={error} path="/error" />
    </switch>
  </Router>
)


export default RouteConfig;
