import React from "react";

import Recipe from './Recipe.js'
import RecipeStore from '../stores/RecipeStore'

export default class Recipes extends React.Component {
	constructor() {
		super();
		this.state = {
      recipes: RecipeStore.getAll()
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
