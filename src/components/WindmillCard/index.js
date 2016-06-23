import React from 'react';
import {
	Text,
	View,
	Image,
} from 'react-native';
import {
	Card,
	Button,
	COLOR,
	TYPO,
} from 'react-native-material-design';

const WindmillCard = (props) => {
	const route = {
		type: 'push',
		route: {
			key: 'windmillDetail',
			title: props.windmill.name,
			id: props.windmill.id,
		}
	};
	return (
		<View>
			<Card>
				<Card.Media
					image={<Image source={props.windmill.image} />}
					overlay
				>
					<Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>{props.windmill.name}</Text>
				</Card.Media>
				<Card.Body>
					<Text>{props.windmill.description}</Text>
				</Card.Body>
				<Card.Actions position="right">
					<Button value="ACTION" text="Visiter" onPress={() => props.handleNavigate(route)} />
				</Card.Actions>
			</Card>
		</View>
	);
};

export default WindmillCard;
