import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../routes/app.route';
import '../styles/client/pages/App.scss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>{this.showRoutes(routes)}</Switch>
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
