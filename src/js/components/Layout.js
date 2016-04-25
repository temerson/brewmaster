import React from "react";

import Header from "./Header.js"
import Navigation from "./Navigation.js"
import Recipes from "./Recipes.js"
import Routes from "./Routes.js"


const contentStyle = {
	padding: "75px 10px 0 165px"
};

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div>
					<Navigation location={this.props.location} />
					<div style={contentStyle} className="content">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}
