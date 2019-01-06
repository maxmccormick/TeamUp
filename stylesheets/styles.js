import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    marginTop: '95%',
    color: 'rgb(74, 160, 236)',
    fontSize: 75,
    fontWeight: 'bold',
  },
  image: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    width: 'auto',
    height: 30,
    marginVertical: 15,
    marginHorizontal: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: 'white',
    borderWidth: 1,
    padding: 1,
  },
  blueButton: {
    backgroundColor: 'transparent',
    width: 40,
    height: 40,
    marginVertical: 15,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: 'rgb(74, 160, 236)',
    borderWidth: 1,
    padding: 3,
  },
  generateButton: {
    backgroundColor: 'rgba(74, 160, 236, 0.2)',
    width: 'auto',
    height: 40,
    marginVertical: 15,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: 'rgb(74, 160, 236)',
    borderWidth: 1,
    padding: 3,
  },
  label: {
    fontSize: 10,
    color: 'white',
    padding: 2,
  },
  blueLabel: {
    fontSize: 20,
    color: 'rgb(74, 160, 236)',
    padding: 2,
  },
  generateLabel: {
    fontSize: 20,
    color: 'rgb(74, 160, 236)',
    padding: 2,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
  subheader: {
    color: 'rgb(74, 160, 236)',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 0,
  },
  pageTitles: {
    color: 'rgb(74, 160, 236)',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  reports: {
    color: 'black',
    fontSize: 12,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'rgb(74, 160, 236)',
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 5,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBox: {
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: 'rgb(74, 160, 236)',
    borderBottomColor: 'rgb(74, 160, 236)',
    backgroundColor: 'rgba(74, 160, 236, 0.2)',
  },
  sliderContainer: {
    flex: 1,
    alignItems:'stretch',
    justifyContent:'center',
    width: 400,
    backgroundColor: 'yellow',
  },
  rating: {
    marginLeft: 50,
  },
  teamDisplays: {
    marginTop: 30,
  },
  teamText: {
    fontSize: 20,
    color: 'white',
  },
  tldr: {
    marginLeft: 1,
  },
  tldrContainer: {
    borderWidth: 1,
    borderColor: 'rgb(74, 160, 236)',
    width: '85%',
    padding: 4,
    marginVertical: 10,
    borderRadius: 6,
  }
});

export default styles;