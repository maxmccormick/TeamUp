import React, { Component } from 'react';
import { TouchableHighlight, TouchableOpacity, TextInput, Text, FlatList, ScrollView, View } from 'react-native';
import styles from '../stylesheets/styles';
import Button from '../components/Buttons';


export default class Random extends Component {
	constructor(props) {
		super(props);
		this.onPressAdd = this.onPressAdd.bind(this);
		this.onPressGenerate = this.onPressGenerate.bind(this);
		this.state = { 
			text: '',
			names: [],
		};
	}

	//Sends inputted player names to ScrollView below.
	onPressAdd() {
		const names = [...this.state.names];
		if (this.state.text) {
			names.push(this.state.text);
		} 
    	this.setState({
    		names: names,
    		text: ''
    	})
  	}

  	//takes the player names,
  	onPressGenerate() {
  		const names = [...this.state.names];
  		// and if the list is at least two names long,
  		if (names.length < 2) {
  			return
  		}
  		const teamA = [];
  		const teamB = [];
  		// the names are randomly arranged into two teams,
  		while (names.length) {
 			if (names.length) {
   				teamA.push(names.splice(Math.floor(Math.random() * names.length), 1))
 			}
 			if (names.length) {
   				teamB.push(names.splice(Math.floor(Math.random() * names.length), 1))
 			}
		}
		//and the app navigates to the'Teams' screen.
		this.props.navigation.navigate('Teams', {
			teamA, teamB
		})
  	}

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.tldrContainer}>
					<Text style={styles.tldr}>
						Add players and then touch Generate Teams. Random TeamUp will generate two random teams.
					</Text>
				</View>
				<Text style={styles.pageTitles}>Add Players</Text>
				<View style={styles.horizontal}>
					<View style={styles.input}>
						<TextInput
							placeholder= 'touch here to add players'
		        			onChangeText={(text) => this.setState({text})}
		        			value={this.state.text}
		      			/>
	      			</View>
	      			<Button onPress={this.onPressAdd} labelStyle={styles.blueLabel} buttonStyle={styles.blueButton} text='+' />
      			</View>
      			<ScrollView>
      				{this.state.names.map((name, index) => (
      					<View key={index}><Text>{name}</Text></View>
    				))}
      			</ScrollView>
      			<Button onPress={this.onPressGenerate} labelStyle={styles.generateLabel} buttonStyle={styles.generateButton} text='GENERATE TEAMS' />
			</View>
		
	)}

	// page title
	static navigationOptions = ({navigation}) => {
		return {
			title: 'Random TeamUp',
		}
	}
}