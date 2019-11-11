import React from 'react';
import {Link} from "react-router-dom"
import { connect } from 'react-redux';
class Form extends React.Component {
	handleChange = (event) => {
		const { name, value } = event.target;
		this.props.dispatch({ type: name, payload: value });
	};
	render() {
		return (
			<React.Fragment>
				<input placeholder="Enter UserName" name="Username" onChange={this.handleChange} />
				<br />
				<input placeholder="Enter Email" name="Email" onChange={this.handleChange} />
				<br />
				<input placeholder="Enter Password" name="Password" onChange={this.handleChange} />
				<Link to="/Display"><button>Display</button></Link>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => {
	return state;
};
export default connect(mapStateToProps)(Form);
