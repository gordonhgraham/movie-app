import React from 'react'
import { View, Text } from 'react-native'

import { Button } from './index.js'

const ErrorTile = (props) => {
  const {
    container,
    textStyle,
    buttonContainer,
  } = styles

  return (
    <View style={container}>
      <Text style={textStyle}>
        No movies to show.{'\n'}{'\n'}
        Please search another year.
      </Text>
      <View style={buttonContainer}>
        <Button
          onPress={props.onPress}
        >Go Back</Button>
      </View>
    </View>
  )
}

const styles = {
  container: {
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    paddingTop: 20,
    width: 100,
  }
}

export { ErrorTile }
