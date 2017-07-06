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
    if (path != '') {
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
      textContainer,
      textStyle,
      headingStyle,
      subHeadingStyle,
    } = styles

    if (this.state.isLoading) {
      return (
        <Spinner />
      )
    }
    else {
      return (
        <ScrollView>
          <View>
            { this.renderBackdropImage(this.state.movieData.backdrop_path) }
          </View>
          <View style={textContainer}>
            <Text style={textStyle}>
              <Text style={headingStyle}>{this.state.movieData.title}</Text>
              <Text style={subHeadingStyle}>{'\n'}Released {this.renderDate(this.state.movieData.release_date)}</Text>
              <Text>{'\n'}{this.state.movieData.description}{'\n'}</Text>

              { this.state.genre.length > 0 && <Text>{'\n'}Genre:{'\n'}</Text> }
              { this.state.genre.map((genre, index) => <Text key={index}>{'\u2022'} {genre.name}{'\n'}</Text> ) }

              { this.state.directors.length > 0 && <Text>{'\n'}Directed by: </Text> }
              { this.state.directors.map((directors, index) => <Text key={index}>{directors}{'\n'}</Text> ) }

              { this.state.creators.length > 0 && <Text>{'\n'}Created by: </Text> }
              { this.state.creators.map((creators, index) => <Text key={index}>{creators}{'\n'}</Text> ) }

              { this.state.actors.length > 0 && <Text>{'\n'}Staring:{'\n'}</Text> }
              { this.state.actors.map((actor, index) => <Text key={index}>{'\u2022'} {actor.name} as {actor.character}{'\n'}</Text> ) }

              { this.state.homepage != '' && <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(this.state.homepage)}>{'\n'}Visit Movie Website</Text>}
            </Text>
          </View>
        </ScrollView>
      )
    }
  }
}

const styles = StyleSheet.create({
  textContainer: {
    margin: 10,
  },
  textStyle: {
    fontSize: 17
  },
  headingStyle: {
    fontSize: 30,
  },
  subHeadingStyle: {
    fontSize: 20,
  },
})
