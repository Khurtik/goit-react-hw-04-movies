import React, { Component } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import * as moviesAPI from '../../services/api';

export default class HomePage extends Component {
  state = { items: [] };

  componentDidMount() {
    moviesAPI.fetchTrendingMovies().then(items => this.setState({ items }));
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Trending today</h1>
        <MoviesList items={items} />
      </div>
    );
  }
}
