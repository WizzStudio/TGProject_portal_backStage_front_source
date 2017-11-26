import React from 'react';
import ReactDOM from 'react-dom';
import AppState from './mobx/AppState';
import {Provider} from "mobx-react";
import {Router, Route, browserHistory} from 'react-router';

const appState = new AppState();

// 加载组件
import {Hello} from './hello';

// 加载样式
import './common/styles/index.scss';

const app = document.getElementById('root');

ReactDOM.render(
  <Provider appState={appState}>
    <Router history={browserHistory}>
      <Route path="/" component={Hello}/>
    </Router>
  </Provider>,
  app
);
