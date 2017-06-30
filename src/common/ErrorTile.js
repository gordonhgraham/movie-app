import React from 'react'
import { View, Text } from 'react-native'

import { Button } from './index.js'

const ErrorTile = (props) => {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  )
}

const styles = {
  
}

export { ErrorTile }
