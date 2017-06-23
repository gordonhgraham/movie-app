import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../common'

export default class App extends React.Component {
  static navigationOptions = {
    title: 'MovieList',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Hello World--MoveList Page</Text>
        <View style={styles.buttonContainerStyle}>
          <Button
            onPress={ ()=> navigate('Movie') }
          >Movie</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
});
