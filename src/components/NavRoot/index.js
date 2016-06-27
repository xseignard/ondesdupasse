import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	BackAndroid,
	NavigationExperimental,
} from 'react-native';
import {
	pushRoute,
	popRoute,
} from '../../actions/nav';
import Home from '../Home';
import WindmillDetail from '../WindmillDetail';
import About from '../About';
import Team from '../Team';
import Participants from '../Participants';
import Thanks from '../Thanks';
import Diaporama from '../Diaporama';

const { CardStack: NavigationCardStack } = NavigationExperimental;

class NavRoot extends Component {
	constructor(props) {
		super(props);
		this.renderScene = this.renderScene.bind(this);
		this.handleBackAction = this.handleBackAction.bind(this);
	}

	componentDidMount() {
		// listen for hardware back button presses
		BackAndroid.addEventListener('hardwareBackPress', this.handleBackAction);
	}

	componentWillUnmount() {
		BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAction);
	}

	handleBackAction() {
		// nothing to pop, quit the app
		if (this.props.nav.index === 0) return false;
		this.props.popRoute();
		return true;
	}

	handleNavigate(action) {
		switch (action && action.type) {
			case 'push':
				this.props.pushRoute(action.route);
				return true;

			case 'back':
			case 'pop':
				return this.handleBackAction();

			default:
				return false;
		}
	}

	renderScene(props) {
		const p = 'scene_';
		const { scene } = props;
		switch (scene.key) {
			case `${p}home`:
				return <Home handleNavigate={this.handleNavigate.bind(this)} />;

			case `${p}windmillDetail`:
				return <WindmillDetail goBack={this.handleBackAction.bind(this)} />;

			case `${p}about`:
				return <About goBack={this.handleBackAction.bind(this)} />;

			case `${p}team`:
				return <Team goBack={this.handleBackAction.bind(this)} />;

			case `${p}participants`:
				return <Participants goBack={this.handleBackAction.bind(this)} />;

			case `${p}thanks`:
				return <Thanks goBack={this.handleBackAction.bind(this)} />;

			case `${p}diaporama`:
				return <Diaporama goBack={this.handleBackAction.bind(this)} />;

			default:
				return <Home handleNavigate={this.handleNavigate.bind(this)} />;
		}
	}

	render() {
		return (
			<NavigationCardStack
				direction="horizontal"
				navigationState={this.props.nav}
				onNavigate={this.handleNavigate.bind(this)}
				renderScene={this.renderScene}
			/>
		);
	}
}

const mapDispatchToProps = {
	pushRoute,
	popRoute,
};

export default connect((state) => state, mapDispatchToProps)(NavRoot);
