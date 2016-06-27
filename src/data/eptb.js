/* eslint global-require: "off" */
export default {
	name: 'Moulin de Nid d\'oie (EPTB)',
	id: 'eptb',
	color: 'yellow',
	card: {
		tagLine: 'Ma tagline',
		description: 'Un moulin eptb',
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
