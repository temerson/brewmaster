import React from "react";

import { AppBar } from 'material-ui';

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<AppBar title="BrewMaster v0.1" />
			</header>
		);
	}
}
