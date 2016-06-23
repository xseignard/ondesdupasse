import { AsyncStorage } from 'react-native';
import {
	applyMiddleware,
	createStore,
} from 'redux';
import thunk from 'redux-thunk';
import {
	persistStore,
	autoRehydrate,
} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import rootReducer from './reducers';

// hot module reloading for the store
const hmr = (store) => {
	if (module.hot) {
		module.hot.accept(() => {
			// eslint-disable-next-line global-require
			const nextRootReducer = require('./reducers').default;
			store.replaceReducer(nextRootReducer);
		});
	}
};

const createAppStore = applyMiddleware(thunk)(createStore);

export const configureStore = () => {
	const store = autoRehydrate()(createAppStore)(rootReducer);
	persistStore(
		store,
		{
			storage: AsyncStorage,
			transforms: [immutableTransform({})],
			// TODO: persist unlocked zones rather than position
			whitelist: ['geolocation'],
		},
		() => {
			console.log('[redux-persist] Store restored from AsyncStorage');
		}
	);
	hmr(store);
	return store;
};

export const store = configureStore();
