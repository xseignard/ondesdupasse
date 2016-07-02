import C from '../../constants';
import { NavigationExperimental } from 'react-native';

const { StateUtils: NavigationStateUtils } = NavigationExperimental;

// TODO: use immutable.js ?
const initialState = {
	index: 0,
	key: 'home',
	routes: [{
		key: 'home',
		title: 'Les Ondes du Passé'
	}]
};

export default function nav(state = initialState, action) {
	switch (action.type) {
		case C.PUSH_ROUTE: {
			// trying to push the route where we already are, no need to change a thing
			if (state.routes[state.index].key === (action.route && action.route.key)) return state;
			// ensure no duplicate keys
			const index = state.routes.findIndex((route) => {
				return action.route.key === route.key && action.route.title === route.title;
			});
			if (index > -1) {
				const clonedState = Object.assign({}, state);
				clonedState.routes.splice(index, 1);
				return NavigationStateUtils.push(clonedState, action.route);
			}
			return NavigationStateUtils.push(state, action.route);
		}
		case C.POP_ROUTE:
			if (state.index === 0 || state.routes.length === 1) return state;
			return NavigationStateUtils.pop(state);

		default:
			return state;
	}
}
