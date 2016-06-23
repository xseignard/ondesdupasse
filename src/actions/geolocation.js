import C from '../constants';

export const geolocationUpdate = (position) => {
	return (dispatch, getState) => {
		dispatch({
			type: C.GEOLOCATION_UPDATE,
			position,
		});
	};
};
