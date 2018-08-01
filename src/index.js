import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import Main from './containers/Main/Main'
import './mock/mockServer'

import store from './redux/store'

import './assets/css/reset.css'
import './assets/css/mixins.less'

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Route component={Main}/>
    </HashRouter>
  </Provider>

  ), document.getElementById('root'));

