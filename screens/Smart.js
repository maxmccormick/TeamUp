import React, { Component } from 'react';
import { TouchableHighlight, TouchableOpacity, TextInput, Text, FlatList, ScrollView, View } from 'react-native';
import { Rating } from 'react-native-elements';
import styles from '../stylesheets/styles';
import Button from '../components/Buttons';

export default class Smart extends Component {
	constructor(props) {
		super(props);
		this.onPressAdd = this.onPressAdd.bind(this);
		this.onPressGenerate = this.onPressGenerate.bind(this);
		this.state = { 
			text: '',
			players: [],
		};
	}

	onPressAdd() {
		const players = [...this.state.players];
		if (this.state.text) {
			players.push({name:this.state.text, rating: 5});
		} 
    	this.setState({
    		players: players,
    		text: ''
    	})
  	}

  	onPressGenerate() {
  		const players = [...this.state.players];
  		if (players.length < 2) {
  			return
  		}
  		const teamA = [];
  		const teamB = [];
  		while (players.length) {
 			if (players.length) {
   				teamA.push(players.splice(Math.floor(Math.random() * players.length), 1))
 			}
 			if (players.length) {
   				teamB.push(players.splice(Math.floor(Math.random() * players.length), 1))
 			}
		}
		this.props.navigation.navigate('Teams', {
			teamA, teamB
		})
  	}

	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.pageTitles}>Add Players</Text>
				<View style={styles.horizontal}>
					<View style={styles.input}>
						<TextInput
							placeholder= 'touch here to type'
		        			onChangeText={(text) => this.setState({text})}
		        			value={this.state.text}
		      			/>
	      			</View>
	      			<Button onPress={this.onPressAdd} labelStyle={styles.blueLabel} buttonStyle={styles.blueButton} text='+' />
      			</View>
      			<ScrollView>
      				{this.state.players.map((player, index) => (
      					<View key={index} style={styles.horizontal}>
      						<View><Text>{player.name}</Text></View>
      						<Rating
								  showRating
								  type="star"
								  fractions={1}
								  startingValue={3.6}
								  readonly
								  imageSize={40}
								  onFinishRating={this.ratingCompleted}
								  style={{ paddingVertical: 10 }}
							/>
      					</View>

    				))}
      			</ScrollView>

      			<Button onPress={this.onPressGenerate} labelStyle={styles.generateLabel} buttonStyle={styles.generateButton} text='GENERATE TEAMS' />
			</View>
		
	)}

	static navigationOptions = ({navigation}) => {
		return {
			title: 'Smart TeamUp',
		}
	}
}