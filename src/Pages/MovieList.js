import React from 'react';
import {StyleSheet, Text, ListView, View} from 'react-native';

import {Button} from '../common'
import {MovieTile} from '../components/MovieTile'

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    title: '1 Mad Max Fury Road',
                    creators: 'Zack Gibson',
                    actors: 'Yon Nuta',
                    poster: 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
                }, {
                    title: '2 Mad Max Fury Road',
                    creators: 'Zack Gibson',
                    actors: 'Yon Nuta',
                    poster: 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
                }, {
                    title: '3 Mad Max Fury Road',
                    creators: 'Zack Gibson',
                    actors: 'Yon Nuta',
                    poster: 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
                }, {
                    title: '4 Mad Max Fury Road',
                    creators: 'Zack Gibson',
                    actors: 'Yon Nuta',
                    poster: 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
                }, {
                    title: '5 Mad Max Fury Road',
                    creators: 'Zack Gibson',
                    actors: 'Yon Nuta',
                    poster: 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
                }, {
                    title: '6 Mad Max Fury Road',
                    creators: 'Zack Gibson',
                    actors: 'Yon Nuta',
                    poster: 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
                }, {
                    title: '7 Mad Max Fury Road',
                    creators: 'Zack Gibson',
                    actors: 'Yon Nuta',
                    poster: 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
                }

            ])
        };
    }

    static navigationOptions = {
        title: 'MovieList'
    }

    render() {
        const {navigate} = this.props.navigation;
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
});
