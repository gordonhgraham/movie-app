import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#f6f6f6',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 6,
    paddingBottom: 6,
    // fontFamily: 'Thonburi-Bold',
  },
  buttonStyle: {
    // flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#000000',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000',
    marginLeft: 5,
    marginRight: 5,
  }
}
export { Button }
