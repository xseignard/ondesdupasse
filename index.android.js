import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Main from './src/main';

const App = () => {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
};

AppRegistry.registerComponent('ondesdupasse', () => App);
