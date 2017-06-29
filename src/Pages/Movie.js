import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Movie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movieData: this.props.navigation.state.params.movieData
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          <Text style={styles.headingStyle}>{this.state.movieData.title}</Text>
        </Text>
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
  headingStyle: {
    fontSize: 30,
  }
});
