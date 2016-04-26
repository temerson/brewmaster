import React from "react";

import Header from "./Header"
import Navigation from "./Navigation"
import Recipes from "./Recipes"
import Routes from "./Routes"


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
