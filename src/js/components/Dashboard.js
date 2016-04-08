import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import { Paper } from 'material-ui';

const dashletCols = 6;

const dashletStyle = {
  height: 250,
  width: '100%',
  marginTop: '30px',
  padding: 5,
  textAlign: 'center',
  display: 'inline-block'
};

export default class Dashboard extends React.Component {
	render() {
		return (
      <Grid fluid={true}>
        <Row>
          <Col md={dashletCols}>
            <Paper style={dashletStyle} zDepth={2}>Panel</Paper>
          </Col>
          <Col md={dashletCols}>
            <Paper style={dashletStyle} zDepth={2}>Panel</Paper>
          </Col>
          <Col md={dashletCols}>
            <Paper style={dashletStyle} zDepth={2}>Panel</Paper>
          </Col>
          <Col md={dashletCols}>
            <Paper style={dashletStyle} zDepth={2}>Panel</Paper>
          </Col>
        </Row>
      </Grid>
		);
	}
}
