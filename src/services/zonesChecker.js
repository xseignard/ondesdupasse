import { store } from '../store';

const chezOim = {
	latitude: 47.21182889,
	longitude: -1.57304099,
};

const toRadius = (number) => {
	return number * Math.PI / 180;
};

// from https://github.com/maxogden/geojson-js-utils
const computeDistance = (coord1, coord2) => {
	const {
		latitude: lat1,
		longitude: lng1,
	} = coord1;
	const {
		latitude: lat2,
		longitude: lng2,
	} = coord2;
	const dLat = toRadius(lat2 - lat1);
	const dLon = toRadius(lng2 - lng1);

	const a = Math.pow(Math.sin(dLat / 2), 2) +
		Math.cos(toRadius(lat1)) *
		Math.cos(toRadius(lat2)) *
		Math.pow(Math.sin(dLon / 2), 2);

	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	// returns distance in meters
	return (6371 * c) * 1000;
};

let unsubscribe;

export function startCheckZones() {
	unsubscribe = store.subscribe(() => {
		const coords = store.getState().geolocation.get('position').coords;
		if (coords) {
			const distance = computeDistance(coords, chezOim);
			if (distance < 100) {
				console.log('[TODO] Handle a list of unlocked zones (redux + redux-persist)');
			}
		}
	});
}

export function stopCheckZones() {
	if (typeof unsubscribe === 'function') unsubscribe();
}
