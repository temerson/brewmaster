import React from "react";

import { Paper } from 'material-ui'

const recipeStyle = {
  height: 75,
  width: '80%',
  margin: 'auto',
  padding: 10
}

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }

	render() {
		return (
      <Paper style={recipeStyle} zDepth={1}>recipe</Paper>
		);
	}
}
