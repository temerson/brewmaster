import React from "react";

import Footer from "./Footer.js"
import Header from "./Header.js"
import Navigation from "./Navigation.js"
import Dashboard from "./Dashboard.js"

const contentStyle = {
	paddingLeft: "150px"
};

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div>
					<Navigation />
					<div style={contentStyle} className="content">
						<Dashboard />
						<Footer />
					</div>
				</div>
			</div>
		);
	}
}
