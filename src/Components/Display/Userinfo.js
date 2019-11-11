import React from 'react';
import { connect } from 'react-redux';

function Display(props) {
	return (
		<React.Fragment>
			<div>
				<h1>{props.Username}</h1>
				<h1>{props.Email}</h1>
				<h1>{props.Password}</h1>
			</div>
		</React.Fragment>
	);
}
const mapStateToProps = (state) => {
	return state;
};
export default connect(mapStateToProps)(Display);
