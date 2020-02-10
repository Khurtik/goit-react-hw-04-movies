import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import qs from 'query-string';
import * as moviesAPI from '../../services/api';
import MoviesForm from '../../components/MoviesForm/MoviesForm';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import styles from './MoviesPage.module.css';

export default class MoviesPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string,
    }).isRequired,
    match: PropTypes.shape({
      url: PropTypes.string,
    }).isRequired,
  };

  state = {
    movies: [],
    error: null,
  };

  componentDidMount() {
    const { location } = this.props;
    if (location.search) {
      const searchParams = qs.parse(location.search).search;
      this.search(searchParams);
    }
  }

  search = query => {
    moviesAPI
      .fetchMovies(query)
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }));
    const { history } = this.props;
    history.push({
      ...this.props.location,
      search: `search=${query}`,
    });
  };

  render() {
    const { movies, error } = this.state;

    const { match, location } = this.props;
    return (
      <div>
        <MoviesForm onSubmit={this.search} />
        <ul className={styles.moviesPageList}>
          {/* {movies.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
            </li>
          ))} */}
          {error && <NotFoundPage />}
          {movies.map(el => (
            <li key={el.id}>
              <Link
                to={{
                  pathname: `${match.url}/${el.id}`,
                  state: { from: { ...location } },
                }}
                className={styles.moviesPageLink}
              >
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
