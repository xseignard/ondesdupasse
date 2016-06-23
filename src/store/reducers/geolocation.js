import { Map } from 'immutable';
import C from '../../constants';

const initialState = Map([
	['position', {}],
]);

export default function geolocation(state = initialState, action) {
	switch (action.type) {
		case C.GEOLOCATION_UPDATE:
			return state.set('position', action.position);

		default:
			return state;
	}
}
