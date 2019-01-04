import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from '../stylesheets/styles';
import image from '../assets/jose.jpg';
import Button from '../components/Buttons';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onPressRandom = this.onPressRandom.bind(this);
    this.onPressSmart = this.onPressSmart.bind(this);
  }
  onPressRandom() {
      this.props.navigation.navigate('Random');
  }

  onPressSmart() {
    this.props.navigation.navigate('Smart');
  }
     
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={image}>
            <Text style={styles.title}>TeamUp</Text>
            <View style={styles.bottomBox}>
                <Text style={styles.subheader}>IT'S TIME TO PICK A SIDE</Text>
                <View style={styles.horizontal}>
                    <Button onPress={this.onPressRandom} labelStyle={styles.label} buttonStyle={styles.button} text='Random TeamUp' />
                    <Button onPress={this.onPressSmart} labelStyle={styles.label} 
                      buttonStyle={styles.button} text='Smart TeamUp' />
                </View>
            </View>
        </ImageBackground>
      </View>
    );
  }
}