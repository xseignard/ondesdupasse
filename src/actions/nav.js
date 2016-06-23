import C from '../constants';

export const pushRoute = (route) => {
	return (dispatch, getState) => {
		dispatch({
			type: C.PUSH_ROUTE,
			route,
		});
	};
};

export const popRoute = () => {
	return (dispatch, getState) => {
		dispatch({
			type: C.POP_ROUTE
		});
	};
};
