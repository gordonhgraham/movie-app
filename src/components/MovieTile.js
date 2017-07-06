import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class MovieTile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movieData: this.props.data,
    }
  }

  render () {
    const {
      containerStyle,
      copyStyle,
      imgContainerStyle,
      headingStyle,
    } = styles

    return (
      <TouchableOpacity style={containerStyle} onPress={this.props.onPress}>
        <Image
          style={{
            // h=1.5185w
            width: (0.5*Dimensions.get('window').width),
            height: (0.7593*Dimensions.get('window').width),
            borderWidth: 12,
            borderColor: 'black'
          }}
          source={{ uri: `https://image.tmdb.org/t/p/w500${this.state.movieData.poster_path}` }}
        />
        <Text style={headingStyle}>{this.state.movieData.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  headingStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
})
