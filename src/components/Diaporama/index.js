import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Image,
	View,
} from 'react-native';
import Sound from 'react-native-sound';
import Swiper from 'react-native-swiper';
import Toolbar from '../Toolbar';
import styles from './styles';
import windmillsData from '../../data';

class Diaporama extends Component {
	constructor(props) {
		super(props);
		const windmillId = this.props.routes[this.props.index].id;
		this.windmill = windmillsData.find((windmill) => windmill.id === windmillId);
	}
	componentDidMount() {
		this.sound = new Sound(this.windmill.diaporama.sound, Sound.MAIN_BUNDLE, (error) => {
			if (error) console.log('[Diaporama] failed to load the sound', error);
			else this.sound.play();
		});
	}

	componentWillUnmount() {
		this.sound.release();
	}

	render() {
		const images = this.windmill.diaporama.images.map((image, index) => {
			return <Image key={index} style={styles.image} resizeMode={'contain'} source={image} />;
		});
		return (
			<View style={styles.mainContainer}>
				<View style={styles.toolbar}>
					<Toolbar goBack={this.props.goBack} />
				</View>
				<View style={styles.container}>
					<Swiper showsPagination={false} autoplay autoplayTimeout={4}>
						{images}
					</Swiper>
				</View>
			</View>
		);
	}
}

export default connect((state) => state.nav)(Diaporama);
