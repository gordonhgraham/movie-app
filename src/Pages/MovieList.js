import React from 'react'
import { ListView, StyleSheet, Text, View} from 'react-native'

import Config from '../../config'
import { Button, ErrorTile, Spinner } from '../common'
import MovieTile from '../components/MovieTile'

export default class MovieList extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        dataSource: [],
        inputYear: this.props.navigation.state.params.inputYear,
        isLoading : true,
      }

      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
  }

  static navigationOptions = ({ navigation }) => ({
      title: `Popular Movies from ${navigation.state.params.inputYear}`
  })

  componentWillMount() {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${Config.api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${this.state.inputYear}`)
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(
            responseJson.results.map(results => {
              return ({
                backdrop_path: results.backdrop_path,
                description: results.overview,
                id: results.id,
                poster_path: results.poster_path,
                release_date: results.release_date,
                title: results.title,
              })
            })
          ),
        }, function() {

        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    const { navigate, goBack } = this.props.navigation

    if (this.state.isLoading) {
      return (
        <Spinner />
      )
    }
    else if (this.state.dataSource.getRowCount() == 0) {
      return (
        <View style={styles.container}>
          <ErrorTile onPress={() => goBack()}/>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={data => {
              return(
                <MovieTile
                  onPress={() => navigate('Movie', { movieData: data })}
                  data={data}
                />
              )
            }}
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      // alignItems: 'center',
      backgroundColor: '#fff',
      justifyContent: 'center',
      // alignItems: 'stretch',
  },
})
