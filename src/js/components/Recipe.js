import React from "react";

import { Card, CardActions, CardHeader, CardText, FlatButton } from 'material-ui'

const Recipe = () => (
  <Card>
    <CardHeader
      title="Blackberry Melomel"
      subtitle="7/10"
      actAsExpander={true}
      showExpandableButton={true} />
    <CardText expandable={true}>
      Two parts blackberry, one part honey
    </CardText>
    <CardActions expandable={true}>
      <FlatButton label="Edit" />
    </CardActions>
  </Card>
);


export default Recipe;
