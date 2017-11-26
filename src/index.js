import React from 'react';
import ReactDOM from 'react-dom';
import AppState from './mobx/AppState';
import {Provider} from "mobx-react";

/* global variable */
import * as api from './service/API'
import * as util from './common/scripts/utils'

const appState = new AppState();

// 加载样式
import './common/styles/index.scss';

// 加载路由
import Route from './router/index.js';


// 声明
window.api = api;
window.util = util;

const app = document.getElementById('root');

/* 根实例 */
ReactDOM.render(
  <Provider appState={appState}>
    <Route/>
  </Provider>,
  app
);
