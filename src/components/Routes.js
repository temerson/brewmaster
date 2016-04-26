import React from "react";

import { browserHistory, IndexRoute, Router, Route } from "react-router";

import Dashboard from "./Dashboard"
import Layout from "./Layout"
import Log from "./Log"
import Recipes from "./Recipes"

export default class Routes extends React.Component {
	render() {
		return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/log" component={Log} />
          <Route path="/recipes" component={Recipes} />
        </Route>
      </Router>
		);
	}
}
