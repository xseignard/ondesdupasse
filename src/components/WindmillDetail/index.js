import React from 'react';
import { connect } from 'react-redux';
import {
	Text,
	View,
} from 'react-native';
import Toolbar from '../Toolbar';
import styles from './styles';

const WindmillDetail = (props) => {
	console.log(props);
	return (
		<View style={styles.mainContainer}>
			<View style={styles.toolbar}>
				<Toolbar goBack={props.goBack} />
			</View>
			<View style={styles.container}>
				<Text>
					Blablablabla.
				</Text>
				<Text>
					{props.routes[props.index].title}
				</Text>
				<Text>
					Id: {props.routes[props.index].id}
				</Text>
			</View>
		</View>
	);
};

export default connect((state) => state.nav)(WindmillDetail);
