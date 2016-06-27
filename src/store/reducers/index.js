import { combineReducers } from 'redux';
import geolocation from './geolocation';
import nav from './nav';
import drawer from './drawer';

const rootReducer = combineReducers({
	geolocation,
	nav,
	drawer,
});

export default rootReducer;
