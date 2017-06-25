import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Button, Header, InputField } from '../common';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Movies By Year',
  }

  render() {
    const { navigate } = this.props.navigation;
    const { container, buttonContainerStyle, textStyle } = styles;
    return (
      <View>
        <View style={container}>
          <Text style={textStyle}>
            <Text>Search for popular movies by the year they were released. Please enter a year to get started.</Text>
          </Text>
          <View style={buttonContainerStyle}>
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
    backgroundColor: '#1c1f24',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainerStyle: {
    paddingTop: 15,
    height: 50,
    width: 100,
    alignSelf: 'center',
    alignItems: 'center'
  },

  textStyle: {
    color: "#5b6073",
    fontSize: 20,
  },
});
