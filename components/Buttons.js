import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from '../stylesheets/styles';

const Button = ({text, onPress, buttonStyle, labelStyle}) => (
	<TouchableHighlight onPress={onPress} style={buttonStyle}>
		<Text style={labelStyle}>{text}</Text>
	</TouchableHighlight>
);

export default Button;