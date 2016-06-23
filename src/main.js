import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import NavRoot from './components/NavRoot';
import { startWatch, stopWatch } from './services/geolocator';
import { startCheckZones, stopCheckZones } from './services/zonesChecker';

export default class Main extends Component {

	componentDidMount() {
		startWatch();
		startCheckZones();
	}

	componentWillUnmount() {
		stopWatch();
		stopCheckZones();
	}

	render() {
		return (
			<Provider store={store}>
				<NavRoot />
			</Provider>
		);
	}
}
