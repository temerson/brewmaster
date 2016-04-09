import React from "react";

import { AppBar } from 'material-ui';

const headerStyle = {
	position: 'fixed',
	width: '100%',
	zIndex: 100
};

export default class Header extends React.Component {
	render() {
		return (
			<header style={headerStyle}>
				<AppBar title="BrewMaster v0.1" />
			</header>
		);
	}
}
