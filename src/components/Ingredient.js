import React from "react";

import { Input } from 'react-bootstrap';

export default class Ingredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

	render() {
    const { ingredient } = this.props;

    if (this.state.editing) {
      return (
        <div>
          <Input type="number" value={ingredient.quantity} />
          <Input type="text" value={ingredient.units} />
          <Input type="text" value={ingredient.name} />
        </div>
      );
    } else {
      return <span>{ingredient.quantity}{ingredient.units} {ingredient.name}</span>;
    }
	}
}
