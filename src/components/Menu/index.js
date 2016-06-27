import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import {
	Avatar,
	Drawer,
	COLOR,
	TYPO,
} from 'react-native-material-design';
import { pushRoute } from '../../actions/nav';
import { toggleDrawer } from '../../actions/drawer';
import styles from './styles';

const Menu = (props) => {
	// eslint-disable-next-line global-require
	const bg = require('../../images/ondes_du_passe.jpg');
	// eslint-disable-next-line global-require
	const logo = require('../../images/logo.jpg');

	const gotoPage = (key, title) => {
		props.pushRoute({ key, title });
		props.toggleDrawer();
	};

	return (
		<Drawer theme="light">
			<Drawer.Header image={<Image source={bg} />}>
				<View style={styles.header}>
					<Avatar size={80} image={<Image source={logo} />} />
					<Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>
						Les Ondes du Passé
					</Text>
				</View>
			</Drawer.Header>

			<Drawer.Section
				items={[
					{
						icon: 'help-outline',
						value: 'A propops',
						onPress: () => gotoPage('about', 'A propos'),
						onLongPress: () => gotoPage('about', 'A propos')
					},
					{
						icon: 'people',
						value: 'L\'équipe',
						onPress: () => gotoPage('team', 'L\'équipe'),
						onLongPress: () => gotoPage('team', 'L\'équipe')
					},
					{
						icon: 'people-outline',
						value: 'Les participants',
						onPress: () => gotoPage('participants', 'Les participants'),
						onLongPress: () => gotoPage('participants', 'Les participants')
					},
					{
						icon: 'favorite',
						value: 'Remerciements',
						onPress: () => gotoPage('thanks', 'Remerciements'),
						onLongPress: () => gotoPage('thanks', 'Remerciements')
					},
				]}
			/>
		</Drawer>
	);
};

export default connect((state) => state, { pushRoute, toggleDrawer })(Menu);
