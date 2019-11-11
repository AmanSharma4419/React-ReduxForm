import { createStore } from 'redux';
const initialState = {
	Username: '',
	Email: '',
	Password: ''
};

function Reducer(state = initialState, action) {
	switch (action.type) {
		case 'Username':
			return { ...state, Username: action.payload };
		case 'Email':
			return { ...state, Email: action.payload };
		case 'Password':
			return { ...state, Password: action.payload };
		default:
			return state;
	}
}

const Store = createStore(Reducer);

export default Store;
