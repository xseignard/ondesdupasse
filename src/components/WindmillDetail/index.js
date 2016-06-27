import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Text,
	View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { pushRoute } from '../../actions/nav';
import Toolbar from '../Toolbar';
import styles from './styles';
import windmillsData from '../../data';

class WindmillDetail extends Component {
	constructor(props) {
		super(props);
		const windmillId = this.props.routes[this.props.index].id;
		this.windmill = windmillsData.find((windmill) => windmill.id === windmillId);
		this.route = {
			key: 'diaporama',
			title: this.windmill.name,
			id: windmillId,
		};
	}

	render() {
		const color = { color: this.windmill.color };
		return (
			<View style={styles.mainContainer}>
				<View style={styles.toolbar}>
					<Toolbar goBack={this.props.goBack} />
				</View>
				<View style={styles.container}>
					<Text style={[styles.summary, color]}>
						{this.windmill.details.summary}
					</Text>
					<View style={styles.divider} />
					<Text style={[styles.interview, color]}>
						{this.windmill.details.interview}
					</Text>
					<View style={styles.divider} />
					<Icon
						name="play-circle-filled"
						size={150}
						color={this.windmill.color}
						onPress={() => this.props.pushRoute(this.route)}
					/>
				</View>
			</View>
		);
	}
}

export default connect((state) => state.nav, { pushRoute })(WindmillDetail);
