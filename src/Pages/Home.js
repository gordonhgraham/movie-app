import React from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Button, Header, InputField } from '../common';

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      inputYear: 2017
    }
  }

  static navigationOptions = {
    title: 'Popular Movies By Year',
  }

  render() {
    const { navigate } = this.props.navigation;
    const {
      container,
      buttonContainerStyle,
      textStyle,
      headingStyle,
      bodyText,
    } = styles;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={container}>

          <Text style={textStyle}>
            <Text style={headingStyle}>{'\n'}{'\n'}Search for popular movies by the year they were released.</Text>
            <Text>{'\n'}{'\n'}</Text>
            <Text style={bodyText}>Please enter a year and tap search.</Text>
          </Text>

          <InputField
            placeholder={"2017"}
            keyboardType={"numeric"}
            maxLength={4}
            returnKeyType={'next'}
            onChangeText={inputYear => {
              this.setState({inputYear})
            }}
            label={'Year'}
          />

          <View style={buttonContainerStyle}>
            <Button
              onPress={()=> {
                navigate('MovieList', { inputYear: this.state.inputYear })
              }}
            >Search</Button>
          </View>

        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1c1f24',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 3,
    // borderColor: 'blue',
  },

  buttonContainerStyle: {
    paddingTop: 15,
    // height: 50,
    width: 100,
    // alignSelf: 'center',
    // alignItems: 'center'
    // flex: 1,
    // borderWidth: 3,
    // borderColor: 'blue',
  },

  textStyle: {
    color: "#5b6073",
    fontSize: 20,
    textAlign: 'center',
    // flex: 1,
    // borderWidth: 3,
    // borderColor: 'blue',
  },

  headingStyle: {
    fontSize: 30
  },

  bodyText: {
    fontSize: 20
  },
});
