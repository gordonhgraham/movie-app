import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const MovieTile = ({ children }) => {
  return (
    <TouchableOpacity style={styles.containerStyle}>
      <View style={styles.imgContainerStyle}>
        <Image
          style={{width: 113, height: 172}}
          source={{uri: `https://image.tmdb.org/t/p/w500${children.poster_path}`}}
        />
      </View>
      <View style={styles.copyStyle}>
        <Text style={styles.headingStyle}>Title:</Text><Text>{children.title}{'\n'}</Text>
        {/* <Text style={styles.headingStyle}>Creators:</Text><Text>{children.creators}{'\n'}</Text>
        <Text style={styles.headingStyle}>Actors:</Text><Text>{children.actors}</Text> */}
      </View>
    </TouchableOpacity>
  )
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

export { MovieTile }
