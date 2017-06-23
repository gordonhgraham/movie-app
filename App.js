import React from 'react';
import Home from './src/Pages/Home'
import Movie from './src/Pages/Movie'
import MovieList from './src/Pages/MovieList'
import { StackNavigator } from 'react-navigation';

const MovieApp = StackNavigator({
  Home: { screen: Home },
  MovieList: { screen: MovieList },
  Movie: { screen: Movie },
});

export default class App extends React.Component {
  render() {
    return (
      <MovieApp></MovieApp>
    );
  }
}
