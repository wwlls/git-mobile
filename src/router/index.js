import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import history from 'utils/history'; 

//test
import TestMember from '../containers/test/member';
import List from '../containers/test/list';
import Index from '../containers/test/index';
import NotFound from '../containers/test/not-found';
/* eslint-enable */

class RouterMap extends Component {
  render() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/testMember" exact component={ TestMember } />
                <Route path="/index" exact component={ Index } />
                <Route path="/list" exact component={ List } />
                <Route path="/*" component={ NotFound } />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
  }
}

export default RouterMap;
