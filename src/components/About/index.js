import React from 'react';
import {
	Text,
	View,
} from 'react-native';
import Toolbar from '../Toolbar';
import styles from './styles';

export default (props) => {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.toolbar}>
				<Toolbar goBack={props.goBack} />
			</View>
			<View style={styles.container}>
				<Text>
					About
				</Text>
				<Text>
					About
				</Text>
				<Text>
					About
				</Text>
			</View>
		</View>
	);
};
