import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Linking } from 'react-native';

import Config from '../../config'

export default class Movie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movieData: this.props.navigation.state.params.movieData,
      genre: [],
      actors: [],
      homepage: '',
      director: '',
      creator: '',
    }
  }



  componentDidMount() {
    return fetch(`https://api.themoviedb.org/3/movie/${this.state.movieData.id}?api_key=${Config.api_Key}&language=en-US&append_to_response=credits`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          genre: responseJson.genres,
          homepage: responseJson.homepage,
          actors: responseJson.credits.cast.filter(cast => cast.order < 3 ),
          // director: (if (responseJson.credits.crew.job == 'Director') {responseJson.credits.crew.name}),
          // creator: responseJson.credits.crew.creator,
        })
      })
      .catch((error) => {
        console.error(error);
      });
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

  render() {
    console.log(this.state);
    const {
      container,
      imageContainer,
      headingStyle,
      subHeadingStyle,
      descriptionStyle
    } = styles

    return (
      <View style={container}>
        <View style={imageContainer}>
          <Image
            style={{
              width: Dimensions.get('window').width,
              height: (0.5625*Dimensions.get('window').width)
            }}
            source={{uri: `https://image.tmdb.org/t/p/w500${this.state.movieData.backdrop_path}`}}
          />
        </View>
        <View>
          <Text>
            <Text style={headingStyle}>{this.state.movieData.title}</Text>
            <Text style={subHeadingStyle}>{'\n'}Released {this.renderDate(this.state.movieData.release_date)}</Text>
            <Text style={descriptionStyle}>{'\n'}{this.state.movieData.description}</Text>
            <Text>{'\n'}{'\n'}Genre:{'\n'}</Text>
            {this.state.genre.map(genre => {
              return (
                <Text>{genre.name} </Text>
              )
            })}
            <Text>{'\n'}{'\n'}Director: {this.state.director}</Text>
            <Text>{'\n'}{'\n'}Creator: {this.state.creator}</Text>

            <Text>{'\n'}Cast:{'\n'}</Text>
            {this.state.actors.map(actor => {
              return (
                <Text>{actor.character} played by {actor.name}{'\n'}</Text>
              )
            })}
            <Text
              style={{color: 'blue'}}
              onPress={() => Linking.openURL(this.state.homepage)}
            >{'\n'}{'\n'}Visit Movie Website
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    // justifyContent: 'center',
  },
  imageContainer: {
    // flex: 1,
    // alignItems: 'stretch',
    // alignItems: 'flex-start',
    // borderColor: 'blue',
    // borderWidth: 3
  },
  headingStyle: {
    fontSize: 30,
  },
  subHeadingStyle: {
    fontSize: 20,
  },
  descriptionStyle: {},
});
