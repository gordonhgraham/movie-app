import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class Movie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movieData: this.props.navigation.state.params.movieData
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

  render() {
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
