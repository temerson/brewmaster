import React from "react";

import { browserHistory, IndexRoute, Router, Route } from "react-router";

import { Layout } from "./"
import Dashboard from "../components/Dashboard"
import Log from "../components/Log"
import { Recipes } from "recipes"

class Routes extends React.Component {
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
export default Routes;
