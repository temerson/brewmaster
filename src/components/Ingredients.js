import React from "react";

import Ingredient from './Ingredient.js'

export default class Ingredients extends React.Component {
	render() {
		const { ingredients } = this.props;

		return (
      <ul>
				{ingredients.map((item) => {
					return <li key={item.id}><Ingredient ingredient={item} /></li>
				})}
      </ul>
		);
	}
}
