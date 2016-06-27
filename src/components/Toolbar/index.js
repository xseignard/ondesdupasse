import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toolbar as MaterialToolbar } from 'react-native-material-design';
import { toggleDrawer } from '../../actions/drawer';
import windmillsData from '../../data';

class Toolbar extends Component {
	constructor(props) {
		super(props);
		this.handleIconPress = this.handleIconPress.bind(this);
		const windmillId = this.props.routes[this.props.index].id;
		this.windmill = windmillsData.find((windmill) => windmill.id === windmillId);
	}

	handleIconPress() {
		if (this.isHomePage) this.props.toggleDrawer();
		else this.props.goBack();
	}

	render() {
		this.isHomePage = this.props.routes[this.props.index].key === 'home';
		const color = this.windmill ? this.windmill.color : '#8c0b70';
		return (
			<MaterialToolbar
				title={this.props.routes[this.props.index].title}
				icon={this.isHomePage ? 'menu' : 'keyboard-backspace'}
				onIconPress={this.handleIconPress}
				style={{ backgroundColor: color }}
			/>
		);
	}
}


export default connect(state => state.nav, { toggleDrawer })(Toolbar);
