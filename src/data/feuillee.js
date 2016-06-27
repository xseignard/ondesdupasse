/* eslint global-require: "off" */
export default {
	name: 'Site de la Feuillée',
	id: 'feuillee',
	color: 'red',
	card: {
		tagLine: 'Ma tagline',
		description: 'Un moulin où l\'on fait du pouet',
		image: require('../images/ondes_du_passe.resized.jpg'),
	},
	details: {
		summary: 'this is my summary',
		interview: 'about the interview',
	},
	diaporama: {
		images: [
			require('../images/img1.png'),
			require('../images/img1.png'),
		],
		sound: 'liveau.mp3',
	},
};
