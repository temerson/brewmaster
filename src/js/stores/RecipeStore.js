import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class RecipeStore extends EventEmitter {
	constructor() {
		super();
		this.recipes = [
			{
				id: 1,
				name: 'Blackberry Mead',
				ingredients: [
					{
						id: 10,
						name: 'Honey',
						quantity: 3,
						units: 'lbs'
					},
					{
						id: 11,
						name: 'Blackberries',
						quantity: 2,
						units: 'lbs'
					}
				]
			},
			{
				id: 2,
				name: 'Dark Ale',
				ingredients: [
					{
						id: 20,
						name: 'Dried Malt Extract',
						quantity: 3,
						units: 'lbs'
					},
					{
						id: 21,
						name: 'Chocolate grains',
						quantity: 4,
						units: 'oz'
					}
				]
			}
		];
	}

	getAll() {
		return this.recipes;
	}

	handleActions(action) {
		switch(action.type) {
			case "ACTION":
        // do stuff
				break;
			default:
				break;
		}
	}
}

const recipeStore = new RecipeStore;
dispatcher.register(recipeStore.handleActions.bind(recipeStore));

export default recipeStore;
