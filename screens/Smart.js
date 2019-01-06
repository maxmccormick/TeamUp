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

  	ratingCompleted(ratingIndex, rating) {
  		let players = [...this.state.players];
  		players = players.map((player, index) => {
  			if (ratingIndex !== index) {
  				return player
  			}
  			player.rating = rating;
  			return player;
  		})
  		this.setState({
    		players: players
    	})
  	}

  	onPressGenerate() {
  		const players = [...this.state.players];
  		if (players.length < 2) {
  			return
  		}
  		players.sort((a, b) => a.rating < b.rating)
  		const teamA = [];
  		const teamB = [];
  		while (players.length) {
 			if (players.length) {
   				teamA.push(players.pop().name)
 			}
 			if (players.length) {
   				teamB.push(players.pop().name)
 			}
		}
		this.props.navigation.navigate('Teams', {
			teamA, teamB
		})
  	}

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.tldrContainer}>
					<Text style={styles.tldr}>
						Add names and then touch and drag their star rating to set their skill level / 5. Smart TeamUp will generate two balanced teams.
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
      			<Text style={styles.pageTitles}>Rate Players</Text>
      			<ScrollView>
      				{this.state.players.map((player, index) => (
      					<View style={styles.horizontalSpaceBetween} key={index}>
      						<View><Text>{player.name}</Text></View>
 							<Rating
								  type="star"
								  fractions={0}
								  startingValue={3}
								  imageSize={20}

								  onFinishRating={(rating) => this.ratingCompleted(rating, index)}
								  style={styles.rating}
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