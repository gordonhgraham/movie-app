import React from 'react'
import { ListView, StyleSheet, Text, View} from 'react-native'

import Config from '../../config'
import { Button, ErrorTile, Spinner } from '../common'
import MovieTile from '../components/MovieTile'

export default class MovieList extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        rawData: [],
        dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        inputYear: this.props.navigation.state.params.inputYear,
        isLoading : true,
        pageNum: 0,
      }

      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
  }

  static navigationOptions = ({ navigation }) => ({
      title: `Popular Movies from ${navigation.state.params.inputYear}`
  })

  getMovies() {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0b4f3a454dd18a72ed1326662f78ae4c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.pageNum+1}&primary_release_date.gte=${this.state.inputYear}-01-01&primary_release_date.lte=${this.state.inputYear}-12-31`)
      .then((response) => response.json())
      .then((responseJson) => {
        let newData =
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

        this.setState({
          rawData: this.state.rawData.concat(newData),
          isLoading: false,
          pageNum: responseJson.page,
          dataSource: this.state.dataSource.cloneWithRows(this.state.rawData.concat(newData)),
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  componentWillMount() {
    this.getMovies()
  }

  render() {
    const { navigate, goBack, } = this.props.navigation
    const { container } = styles

    if (this.state.isLoading) {
      return (
        <Spinner />
      )
    }
    else if (this.state.dataSource.getRowCount() == 0) {
      return (
        <View style={container}>
          <ErrorTile onPress={() => goBack()}/>
        </View>
      )
    } else {
      return (
        <View style={container}>
          <ListView
            dataSource={this.state.dataSource}
            pageSize={10}
            onEndReached={() => this.getMovies()}
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
      backgroundColor: '#fff',
      justifyContent: 'center',
  },
})
