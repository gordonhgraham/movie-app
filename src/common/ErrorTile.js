import React from 'react'
import { View, Text } from 'react-native'

import { Button } from './index.js'

const ErrorTile = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>No movies to show.{'\n'}{'\n'}Please search another year.</Text>
      <View style={styles.buttonContainerStyle}>
        <Button
          onPress={props.onPress}
        >Go Back</Button>
      </View>
    </View>
  )
}

const styles = {
  containerStyle: {
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainerStyle: {
    paddingTop: 20,
    width: 100,
  }
}

export { ErrorTile }
