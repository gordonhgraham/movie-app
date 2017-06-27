import React from 'react';
import {StyleSheet, Text, ListView, View} from 'react-native';

import {Button, Spinner} from '../common'
import {MovieTile} from '../components/MovieTile'

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            isLoading : true,
            dataSource: [],
        };
    }

    static navigationOptions = {
        title: 'MovieList'
    }

    componentDidMount() {
      return fetch('https://api.themoviedb.org/3/discover/movie?api_key=API_KEY_REMOVED&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1987')
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
                  poster_path: results.poster_path
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
        const {navigate} = this.props.navigation;

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
                    renderRow={data => <MovieTile>{data}</MovieTile>}
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
