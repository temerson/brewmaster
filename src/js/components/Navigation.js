import React from "react";

import { LeftNav, MenuItem } from 'material-ui'

const navStyle = {
	marginTop: '65px'
}

export default class Navigation extends React.Component {

	render() {
		return (
			<LeftNav style={navStyle} width={150}>
				<MenuItem>Dashboard</MenuItem>
				<MenuItem>Log Book</MenuItem>
				<MenuItem>Recipes</MenuItem>
			</LeftNav>
		);
	}
}
