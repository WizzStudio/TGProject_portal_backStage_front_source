import React from 'react';
import {BrowserRouter as Router, Route, Switch,Prompt} from 'react-router-dom';
// import Bundle from '../router/bundle'; /*TODO:以后使用懒加载*/


import {Hello} from '../hello.js';
import {departments} from "../pages/departments";
import {login} from "../pages/login";
import {projects} from "../pages/projects";
import {members} from "../pages/members";
import projectInfo from '../pages/projectInfo'



const RouteConfig = () => (
    <switch>
      <Route component={login} path="/login"/>
      <Route component={departments} path="/departments"/>
      <Route component={projects} path="/projects"/>
      <Route component={projectInfo} path="/projectInfo"/>
      <Route component={members} path="/members"/>
      <Route component={Hello} path="/hello"/>
    </switch>
)


export default RouteConfig;
