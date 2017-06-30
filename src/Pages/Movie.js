import React from 'react'
import { Dimensions, ScrollView, Image, Linking, StyleSheet, Text, View } from 'react-native'

import Config from '../../config'
import { Spinner } from '../common/index'

export default class Movie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      actors: [],
      creators: [],
      directors: [],
      genre: [],
      homepage: '',
      isLoading: true,
      movieData: this.props.navigation.state.params.movieData,
    }
  }

  isJobTitle({job}, jobTitle) {
    if (job == jobTitle) { return true }
    return false
  }

  renderBackdropImage(path) {
    if (path != null) {
      return (
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: (0.5625*Dimensions.get('window').width)
          }}
          source={{ uri: `https://image.tmdb.org/t/p/w500${path}` }}
        />
      )
    }
  }

  renderDate(dateStr) {
    const
    months =
    ['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'],
    [year, month, date] = dateStr.split("-"),
    day = date.replace(/^0+/, '')
    return `${months[month-1]} ${day}, ${year}`
  }

  componentDidMount() {
    return fetch(`https://api.themoviedb.org/3/movie/${this.state.movieData.id}?api_key=${Config.api_Key}&language=en-US&append_to_response=credits`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          actors: responseJson.credits.cast.filter(cast => cast.order < 3 ),
          creators: responseJson.credits.crew.filter(c => this.isJobTitle(c, 'Creator')).map(c => c.name),
          directors: responseJson.credits.crew.filter(c => this.isJobTitle(c, 'Director')).map(c => c.name),
          genre: responseJson.genres,
          homepage: responseJson.homepage,
          isLoading: false,
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    const {
      container,
      descriptionStyle,
      headingStyle,
      imageContainer,
      subHeadingStyle,
      textStyle,
    } = styles

    if (this.state.isLoading) {
      return (
        <Spinner />
      )
    }
    else {
      return (
        <View style={container}>
          <View style={imageContainer}>
            { this.renderBackdropImage(this.state.movieData.backdrop_path) }
          </View>
          <ScrollView>
            <Text style={textStyle}>
              <Text style={headingStyle}>{this.state.movieData.title}</Text>
              <Text style={subHeadingStyle}>{'\n'}Released {this.renderDate(this.state.movieData.release_date)}</Text>
              <Text style={descriptionStyle}>{'\n'}{this.state.movieData.description}</Text>

              { this.state.genre.length > 0 && <Text>{'\n'}Genre: </Text> }
              { this.state.genre.map(genre => <Text>{genre.name} </Text> ) }

              { this.state.directors.length > 0 && <Text>{'\n'}Directed by: </Text> }
              { this.state.directors.map(directors => <Text>{directors} </Text> ) }

              { this.state.creators.length > 0 && <Text>{'\n'}Created by: </Text> }
              { this.state.creators.map(creators => <Text>{creators}</Text> ) }

              { this.state.actors.length > 0 && <Text>{'\n'}Staring: </Text> }
              { this.state.actors.map(actor => <Text>{actor.name} as {actor.character}{'\n'}</Text> ) }

              { this.state.homepage != '' && <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(this.state.homepage)}>{'\n'}Visit Movie Website</Text>}
            </Text>
          </ScrollView>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    // justifyContent: 'center',
  },
  descriptionStyle: {},
  headingStyle: {
    fontSize: 30,
  },
  imageContainer: {
    // flex: 1,
    // alignItems: 'stretch',
    // alignItems: 'flex-start',
    // borderColor: 'blue',
    // borderWidth: 3
  },
  subHeadingStyle: {
    fontSize: 20,
  },
  textStyle: {
    fontSize: 18
  },
})
