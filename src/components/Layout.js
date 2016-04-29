import React from "react";

import Header from './Header'
import Navigation from '../components/Navigation'
import Recipes from '../components/Recipes'
import Routes from './Routes'
//, Navigation, Recipes, Routes }

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
