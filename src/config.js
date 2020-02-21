import _ from 'lodash';
import React from 'react';
import { Dimensions, Platform, View, ActivityIndicator, Image, StyleSheet } from 'react-native';

const dimensions = Dimensions.get('window');

const baseFontSize = 16;

const font = {
	size: baseFontSize
};

const colors = {
	yellow: '#ffcc00',
	white: '#ffffff',
	grays: {
		normal: '#7f7f7f',
		dark: '#4c4c4c',
		medium: '#b7baba'
	},
	youth: '#f5821e'
};

export default {
	viewPort: {
		backgroundColor: '#fff',
		flex: 1,
		padding: 0,
		margin: 0
	},
	font,
	colors,
	header: {
		barStyle: {
			elevation: 0,
			backgroundColor: colors.yellow,
			height: baseFontSize * 4
		},
		headerLeft: <Image source={require('./assets/images/logo.png')} style={{ width: baseFontSize * 2, height: baseFontSize * 2, margin: baseFontSize }} />
	},
	horizontalTransitions: () => ({
		screenInterpolator: sceneProps => {
			const { layout, position, scene } = sceneProps;
			const { index } = scene;
			const width = layout.initWidth;

			return {
				opacity: position.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange: [0, 1, 0]
				}),
				transform: [
					{
						translateX: position.interpolate({
							inputRange: [index - 1, index, index + 1],
							outputRange: [width, 0, -width]
						})
					}
				]
			};
		},
		headerTitleInterpolator: sceneProps => {
			const { layout, position, scene } = sceneProps;
			const { index } = scene;

			return {
				opacity: position.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange: [0, 1, 0]
				}),
				transform: [
					{
						translateX: position.interpolate({
							inputRange: [index - 1, index, index + 1],
							outputRange: [-50, 0, 50]
						})
					}
				]
			};
		}
	}),
	images: {
		gifs: {
			uncracked: require('./assets/images/gifs/egg.gif'),
			cracked: require('./assets/images/gifs/egg-cracking.gif')
		}
	},
	API: {
		baseURL: ''
	},
	getDiff: (object, base) => {
		function changes(object, base) {
			return _.transform(object, function(result, value, key) {
				if (!_.isEqual(value, base[key])) {
					result[key] = _.isObject(value) && _.isObject(base[key]) ? changes(value, base[key]) : value;
				}
			});
		}

		return changes(object, base);
	},
	dimensions,
	Loader: (
		<View style={{ flex: 1 }}>
			<ActivityIndicator size="small" color="#ffc909" />
		</View>
	)
};
