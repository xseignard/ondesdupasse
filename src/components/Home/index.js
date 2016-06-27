import React from 'react';
import { connect } from 'react-redux';
import {
	View,
	ScrollView,
} from 'react-native';
import Toolbar from '../Toolbar';
import WindmillCard from '../WindmillCard';
import styles from './styles';
import windmillsData from '../../data';

const Home = (props) => {
	const windmills = windmillsData.map((windmill, index) => {
		return (
			<WindmillCard
				key={index}
				windmill={windmill}
				handleNavigate={props.handleNavigate}
			/>
		);
	});
	return (
		<View style={styles.mainContainer}>
			<View style={styles.toolbar}>
				<Toolbar />
			</View>
			<ScrollView style={styles.container}>
				{windmills}
			</ScrollView>
		</View>
	);
};

// TODO: connect to the list of unlocked zones
export default connect((state) => state.geolocation.get('position'))(Home);
