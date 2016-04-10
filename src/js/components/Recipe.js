import React from "react";

import { Card, CardActions, CardHeader, CardText, FlatButton } from 'material-ui'

import Ingredients from './Ingredients.js'

const recipeStyle = {
  margin: '15px 0'
}

const Recipe = () => (
  <Card style={recipeStyle}>
    <CardHeader
      title="Blackberry Melomel"
      subtitle="7/10"/>
    <CardText>
      <Ingredients />
    </CardText>
    <CardActions>
      <FlatButton label="Edit" />
    </CardActions>
  </Card>
);


export default Recipe;
