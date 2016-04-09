import React from "react";

import Header from "./Header.js"
import Navigation from "./Navigation.js"
import Recipes from "./Recipes.js"

const contentStyle = {
	paddingLeft: "165px",
	paddingTop: "69px"
};

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div>
					<Navigation />
					<div style={contentStyle} className="content">
						<Recipes />
					</div>
				</div>
			</div>
		);
	}
}
