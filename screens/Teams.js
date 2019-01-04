import React, { Component } from 'react';
import { TouchableHighlight, TouchableOpacity, Text, ScrollView, View } from 'react-native';
import styles from '../stylesheets/styles';

export default class Teams extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
		<React.Fragment>
			<Text>{this.props.navigation.getParam('teamA')}</Text>
			<Text>{this.props.navigation.getParam('teamB')}</Text>
		</React.Fragment>


	)}

	static navigationOptions = ({navigation}) => {
		return {
			title: 'Your TeamUp',
		}
	}
}