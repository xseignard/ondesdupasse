import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	toolbar: { },
	container: {
		marginTop: 56,
		flex: 1,
	},
	image: {
		width,
		height: height - 80,
	}
});
