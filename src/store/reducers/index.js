import { combineReducers } from 'redux';
import geolocation from './geolocation';
import nav from './nav';

const rootReducer = combineReducers({
	geolocation,
	nav,
});

export default rootReducer;
