import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import history from 'utils/history'; 

import Home from '../containers/home/home';
import Lend from '../containers/lend/lend';
import Mine from '../containers/mine/mine';
import Merchant from '../containers/merchant/merchant';
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
                <Route path="/home" exact component={ Home } />
                <Route path="/lend" exact component={ Lend } />
                <Route path="/mine" exact component={ Mine } />
                <Route path="/merchant" exact component={ Merchant } />


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