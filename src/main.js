import React, { Component } from 'react';
import { DrawerLayoutAndroid } from 'react-native';
import { connect } from 'react-redux';
import NavRoot from './components/NavRoot';
import Menu from './components/Menu';
import { startWatch, stopWatch } from './services/geolocator';
import { startCheckZones, stopCheckZones } from './services/zonesChecker';
import { toggleDrawer } from './actions/drawer';

class Main extends Component {
	componentDidMount() {
		startWatch();
		startCheckZones();
	}

	componentWillUpdate(nextProps) {
		if (nextProps.visible !== this.props.visible) {
			if (nextProps.visible) this.refs.DRAWER.openDrawer();
			else this.refs.DRAWER.closeDrawer();
		}
	}

	componentWillUnmount() {
		stopWatch();
		stopCheckZones();
	}

	render() {
		return (
			<DrawerLayoutAndroid
				drawerWidth={275}
				drawerPosition={DrawerLayoutAndroid.positions.Left}
				renderNavigationView={() => <Menu />}
				onDrawerClose={() => {
					if (this.props.visible) this.props.toggleDrawer();
				}}
				onDrawerOpen={() => {
					if (!this.props.visible) this.props.toggleDrawer();
				}}
				ref="DRAWER"
			>
				<NavRoot />
			</DrawerLayoutAndroid>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		visible: state.drawer.get('visible'),
	};
};

export default connect(mapStateToProps, { toggleDrawer })(Main);
