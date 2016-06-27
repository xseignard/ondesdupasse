import { Map } from 'immutable';
import C from '../../constants';

const initialState = Map([
	['visible', false],
]);

export default function drawer(state = initialState, action) {
	switch (action.type) {
		case C.TOGGLE_DRAWER:
			return state.set('visible', !state.get('visible'));

		default:
			return state;
	}
}
