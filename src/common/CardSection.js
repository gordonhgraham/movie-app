import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#88a9cc',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#f6f6f6',
    position: 'relative'
  }
}

export { CardSection }
