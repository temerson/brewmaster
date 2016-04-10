import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class RecipeStore extends EventEmitter {
	constructor() {
		super();
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
