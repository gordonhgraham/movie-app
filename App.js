import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './src/Pages/Home'
import Movie from './src/Pages/Movie'
import MovieList from './src/Pages/MovieList'

const MovieApp = StackNavigator({
  Home: { screen: Home },
  MovieList: { screen: MovieList },
  Movie: { screen: Movie },
});

export default class App extends React.Component {
  render() {
    return (
      <MovieApp />
    );
  }
}
