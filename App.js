import React from 'react';
import { StyleSheet, Text, View, h1, h3 } from 'react-native';
import { Button, Header, InputField } from './src/common';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={"Movies by Year"}></Header>
        <View style={styles.container}>
          <Text style={styles.headingStyle}>Popular Movies by Year</Text>
          <Text>Search for popular movies by release year.</Text>
          <Text>Please enter a year to get started.</Text>
          <View style={styles.buttonContainerStyle}>
            <InputField
              placeholder="1987"
              autoCorrect={false}
              keyboardType="numeric"
              // style={inputStyle}
              // value={value}
              // onChangeText={onChangeText}
            ></InputField>
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
    justifyContent: 'center',
  },
  buttonContainerStyle: {
    paddingTop: 15,
    height: 50,
    width: 100,
    alignSelf: 'center',
    alignItems: 'center'
  },
});
