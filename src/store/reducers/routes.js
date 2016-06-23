import { Map } from 'immutable';

const defaultState = Map([
	['scene', {}],
]);

export default function routes(state = defaultState, action) {
	switch (action.type) {
		// focus action is dispatched when a new screen comes into focus
		case 'focus':
			return state.set('scene', action.scene);
		default:
			return state;
	}
}
