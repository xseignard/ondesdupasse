import C from '../constants';

export const toggleDrawer = () => {
	return (dispatch, getState) => {
		dispatch({
			type: C.TOGGLE_DRAWER,
		});
	};
};
