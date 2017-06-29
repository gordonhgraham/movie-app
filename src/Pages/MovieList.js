import React from 'react';
import {StyleSheet, Text, ListView, View} from 'react-native';
import Config from '../../config.js'

import {Button, Spinner} from '../common'
import MovieTile from '../components/MovieTile'


export default class MovieList extends React.Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            isLoading : true,
            inputYear: this.props.navigation.state.params.inputYear,
            dataSource: [],
        };
    }

    static navigationOptions = ({ navigation }) => ({
        title: `Popular Movies from ${navigation.state.params.inputYear}`
    })

    componentDidMount() {
      return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${Config.api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${this.state.inputYear}`)
        .then((response) => response.json())
        .then((responseJson) => {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(
              responseJson.results.map(results => {
                return ({
                  id: results.id,
                  title: results.title,
                  poster_path: results.poster_path,
                  backdrop_path: results.backdrop_path,
                  release_date: results.release_date,
                  description: results.overview,
                })
              })
            ),
          }, function() {
            // console.log(this.state.dataSource);
          });
        })
        .catch((error) => {
          console.error(error);
        });
  }

    render() {
      const { navigate } = this.props.navigation;
      if (this.state.isLoading) {
        return (
          <Spinner />
        )
      }
      else {
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
});
