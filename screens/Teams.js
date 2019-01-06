import React, { Component } from 'react';
import { TouchableHighlight, TouchableOpacity, ImageBackground, Text, ScrollView, View } from 'react-native';
import styles from '../stylesheets/styles';
import image from '../assets/jose5.jpg';

export default class Teams extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
		<View style={styles.container}>
			<ImageBackground style={styles.image} source={image}>
				<ScrollView style={styles.teamDisplays}>            
					{this.props.navigation.getParam('teamA').map((name, index) =>  {
						return <Text style={styles.teamText} key={index}>{name}</Text>
					})}
				</ScrollView>
				<Text style={styles.subheader}>VS</Text>
				<ScrollView style={styles.teamDisplays}>            
					{this.props.navigation.getParam('teamB').map((name, index) =>  {
						return <Text style={styles.teamText} key={index}>{name}</Text>
					})}
				</ScrollView>
			</ImageBackground>
		</View>


	)}

	static navigationOptions = ({navigation}) => {
		return {
			title: 'Your TeamUp',
		}
	}
}