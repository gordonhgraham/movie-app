import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation';

export default class MovieTile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movieData: this.props.data,
    }
  }

  render () {
    return (
      <TouchableOpacity style={styles.containerStyle} onPress={this.props.onPress}>
        <View style={styles.imgContainerStyle}>
          <Image
            style={{width: 113, height: 172}}
            source={{uri: `https://image.tmdb.org/t/p/w500${this.state.movieData.poster_path}`}}
          />
        </View>
        <View style={styles.copyStyle}>
          <Text style={styles.headingStyle}>Title:</Text><Text>{this.state.movieData.title}{'\n'}</Text>
          {/* <Text style={styles.headingStyle}>Release Date</Text><Text>{this.state.movieData.release_date}{'\n'}</Text> */}
          {/* <Text style={styles.headingStyle}>Creators:</Text><Text>{this.props.children.creators}{'\n'}</Text>
          <Text style={styles.headingStyle}>Actors:</Text><Text>{this.props.children.actors}</Text> */}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = {
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
    flexDirection: 'row',
    padding: 10,
  },
  copyStyle: {
    marginLeft: 10,
  },
  headingStyle: {
    fontSize: 20
  }
}
