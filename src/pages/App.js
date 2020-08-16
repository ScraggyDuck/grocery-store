import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../routes';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container-fluid p-0'>
          <Switch>{this.showRoutes(routes)}</Switch>
        </div>
      </Router>
    );
  }

  showRoutes = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            path={route.path}
            key={index}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };
}
