import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/login/LoginPage'
import Main from './pages/main/main'

// import Questions from './pages/main/questions/questions'
// import User from './pages/main/user/user'
// import Test from './pages/main/test/test'
// import Management from './pages/main/management/management'
// import Marking from './pages/main/marking/marking'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/main" component={Main} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
