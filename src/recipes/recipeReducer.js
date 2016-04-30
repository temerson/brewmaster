const defaultRecipes = [
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

const recipeReducer = (state = defaultRecipes, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default recipeReducer;
