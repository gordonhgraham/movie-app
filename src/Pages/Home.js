import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Button, Header, InputField } from '../common';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Movie Year',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={styles.container}>
          <Text>Search for popular movies by the year they were release.</Text>
          <Text>Please enter a year to get started.</Text>
          <View style={styles.buttonContainerStyle}>
            <Button
              onPress={()=> navigate('MovieList') }
            >Movie List</Button>
          </View>
        </View>
      </View>
    )
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
