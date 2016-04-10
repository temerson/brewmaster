import React from "react";

import { Input } from 'react-bootstrap';

const testVal = {
  name: 'Honey',
  quantity: '5',
  units: 'lbs'
}

export default class Ingredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

	render() {
    if (this.state.editing) {
      return (<div>
        <Input type="number" value={testVal.quantity} />
        <Input type="text" value={testVal.units} />
        <Input type="text" value={testVal.name} />
      </div>);
    } else {
      return (<span>{testVal.quantity}{testVal.units} {testVal.name}</span>);
    }
	}
}
