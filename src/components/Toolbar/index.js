import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toolbar as MaterialToolbar } from 'react-native-material-design';


class Toolbar extends Component {

	constructor(props) {
		super(props);
		this.handleIconPress = this.handleIconPress.bind(this);
		this.handleBadgePress = this.handleBadgePress.bind(this);
	}

	handleIconPress() {
		if (this.isHomePage) console.log('[TODO] Menu');
		else this.props.goBack();
	}

	handleBadgePress() {
		console.log('[TODO] Badge behavior');
	}

	render() {
		this.isHomePage = this.props.routes[this.props.index].key === 'home';
		return (
			<MaterialToolbar
				title={this.props.routes[this.props.index].title}
				icon={this.isHomePage ? 'menu' : 'keyboard-backspace'}
				onIconPress={this.handleIconPress}
				actions={[{
					icon: 'warning',
					badge: { value: 2, animate: true },
					onPress: this.handleBadgePress,
				}]}
				rightIconStyle={{
					margin: 10
				}}
			/>
		);
	}
}

export default connect((state) => state.nav)(Toolbar);
