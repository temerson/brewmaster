import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardText, FlatButton } from 'material-ui'

import { Ingredients, recipeReducer } from './'

const recipeStyle = {
  margin: '15px 0'
}

const Recipe = ({ recipe }) => (
  <Card style={recipeStyle}>
    <CardHeader
      title={recipe.name}
      subtitle="7/10"/>
    <CardText>
      <Ingredients ingredients={recipe.ingredients} />
    </CardText>
    <CardActions>
      <FlatButton label="Edit" />
    </CardActions>
  </Card>
);
Recipe.propTypes = {
  recipe: PropTypes.object.isRequired
}

const RecipeList = ({ recipes }) => (
  <div>
    {recipes.map(item =>
      <Recipe key={item.id} recipe={item} />
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    recipes: state
  }
};

const Recipes = connect(mapStateToProps)(RecipeList);

export default Recipes;
