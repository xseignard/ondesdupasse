import { store } from '../store';
import { geolocationUpdate } from '../actions/geolocation';

const opts = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0,
};
let watchID;

export function startWatch() {
	// watchID = navigator.geolocation.watchPosition(
	// 	(position) => store.dispatch(geolocationUpdate(position),
	// 	(error) => console.log(error),
	// 	opts
	// );
	watchID = setInterval(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				store.dispatch(geolocationUpdate(position));
			},
			(error) => console.log(error),
			opts
		);
	}, 5000);
}

export function stopWatch() {
	// navigator.geolocation.clearWatch(watchID);
	clearInterval(watchID);
}
