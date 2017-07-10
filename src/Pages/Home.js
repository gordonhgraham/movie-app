import React from 'react'
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback, Image, Linking } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { Button, InputField } from '../common'

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputYear: 2017
    }
  }

  static navigationOptions = {
    title: 'Popular Movies By Year',
  }

  render() {
    const { navigate } = this.props.navigation
    const {
      attribution,
      container,
      mainContentContainer,
      buttonContainer,
      textStyle,
      headingStyle,
      bodyText,
    } = styles

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={container}>
          <View style={mainContentContainer}>
            <Text style={textStyle}>
              <Text style={headingStyle}>
                {'\n'}{'\n'}Search for popular movies by the year they were released.
              </Text>
              <Text>{'\n'}{'\n'}</Text>
              <Text style={bodyText}>
                Please enter a year and tap search.
              </Text>
            </Text>

            <InputField
              placeholder={"2017"}
              keyboardType={"numeric"}
              maxLength={4}
              returnKeyType={'next'}
              onChangeText={inputYear => {
                if (inputYear.length > 3) { Keyboard.dismiss() }
                this.setState({inputYear})
              }}
              label={'Year'}
            />

            <View style={buttonContainer}>
              <Button
                onPress={()=> {
                  navigate('MovieList', { inputYear: this.state.inputYear })
                }}
              >Search</Button>
            </View>
          </View>
          <View style={attribution}>
            <Image
              source={require('../tmdb_logo.png')}
              style={{ width: 75, height: 30 }}
            />
            <Text style={textStyle}>
              This product uses the TMDb API but is not endorsed or certified by TMDb.
            </Text>
            <Text
              style={{ color: 'blue' }}
              onPress={() => Linking.openURL('https://themoviedb.org')}
            >themoviedb.org</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  attribution: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 35,
  },
  container: {
    flex: 1,
  },

  mainContentContainer: {
    flex: 3,
    alignItems: 'center',
  },

  buttonContainer: {
    paddingTop: 15,
    width: 140,
  },

  textStyle: {
    color: "#5b6073",
    fontSize: 20,
    textAlign: 'center',
  },

  headingStyle: {
    fontSize: 30
  },

  bodyText: {
    fontSize: 20
  },
})
