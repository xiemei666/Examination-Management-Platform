import React from 'react';
import { Router, Route, Switch,Redirect } from 'dva/router';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/login/LoginPage'
import Main from './pages/main/main'



function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={IndexPage} /> */}
        <Route path="/login" component={LoginPage} />
        <Route path="/main" component={Main} />
        <Redirect to="/main" from="/"/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
