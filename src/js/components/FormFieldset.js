import React from "react";

export default class FormFieldset extends React.Component {
	render() {
		return (
			<fieldset class="form-group">
				<label>{this.props.label}</label>
				<input type={this.props.type} 
					className="form-control" />
			</fieldset>
		);
	}
}	