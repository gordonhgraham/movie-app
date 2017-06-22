import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Header, InputField } from '../common';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={"Popular Movies By Year"}></Header>
        <View style={styles.container}>
          <Text>Search for popular movies by the year they were release.</Text>
          <Text>Please enter a year to get started.</Text>
          <View style={styles.buttonContainerStyle}>
            <Button onPress={()=> console.log('button pressed')}>Search</Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 45,
  },
  buttonContainerStyle: {
    paddingTop: 15,
    height: 50,
    width: 100,
    alignSelf: 'center',
    alignItems: 'center'
  },
});
