import React from "react";

import { LeftNav, MenuItem } from 'material-ui'

const navStyle = {
	marginTop: '65px'
}

const activeStyle = {
	borderBottom: '3px solid orange',
	background: '#EEE'
}

const inactiveStyle = {
	borderBottom: '3px'
}

class Navigation extends React.Component {
	render() {
		const { pathname } = this.props.location;
		const links = [
			{id: 0, link: '#/dashboard', text: 'Dashboard', active: pathname === "/" || pathname === "/dashboard"},
			{id: 1, link: '#/log', text: 'Log', active: pathname === "/log"},
			{id: 2, link: '#/recipes', text: 'Recipes', active: pathname === "/recipes"}
		];

		return (
			<LeftNav style={navStyle} width={150}>
				{links.map( link => (
					<MenuItem key={link.id} href={link.link} style={link.active? activeStyle : inactiveStyle}>{link.text}</MenuItem>
				))};
			</LeftNav>
		);
	}
}

export default Navigation;
