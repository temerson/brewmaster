import React from "react";
import { Card, CardActions, CardHeader, CardText, FlatButton } from 'material-ui'

import { Ingredients } from './'

const recipeStyle = {
  margin: '15px 0'
}

class Recipe extends React.Component {
  render() {
    const { recipe } = this.props;

    return (
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
  }
}


class Recipes extends React.Component {
	constructor() {
		super();
		this.state = {
      recipes: []
    };
	}

	render() {
		const { recipes } = this.state;

		const RecipeComponents = recipes.map((item) => {
			return <Recipe key={item.id} recipe={item} />
		});

		return (
      <div>
				{RecipeComponents}
      </div>
		);
	}
}

export default Recipes;
