import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes/routes';
import Movie from '../../components/Movie/Movie';
import NotFound from '../NotFoundPage/NotFoundPage';
import Loader from '../../components/Loader/Loader';
import styles from './MoviesDetailsPage.module.css';
import * as moviesAPI from '../../services/api';

class MoviesDetailsPage extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
      url: PropTypes.string,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.shape({}),
      }),
    }).isRequired,
  };

  state = { movie: null, isLoading: false, error: null };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { match } = this.props;
    const { id } = match.params;

    moviesAPI
      .fetchMoviesWithId(id)
      .then(movie => this.setState({ movie }))
      .catch(error => this.setState({ error }))
      .finally(this.setState({ isLoading: false }));
  }

  onGoback = () => {
    const { state } = this.props.location;
    const { search } = this.state;

    if (state) {
      this.props.history.push(state.from);
      return;
    }

    this.props.history.push({
      pathname: '/',
      search: `?movies=${search}`,
    });
    // const { history } = this.props;
    // history.push('/');
  };

  render() {
    const { movie, error, isLoading } = this.state;
    const { match } = this.props;

    return (
      <div>
        {error && <NotFound />}
        {isLoading ? (
          <Loader />
        ) : (
          // eslint-disable-next-line react/jsx-props-no-spreading
          movie && <Movie {...movie} onGoback={this.onGoback} />
        )}
        <div className={styles.moviesDetailsPageContainer}>
          <h3 className={styles.titleDetails}>Additional information</h3>

          <NavLink
            activeStyle={{ color: 'red', textDecoration: 'none' }}
            to={`${match.url}/cast`}
          >
            <span className={styles.titleCast}>Cast</span>
          </NavLink>
          <NavLink
            activeStyle={{ color: 'red', textDecoration: 'none' }}
            to={`${match.url}/reviews`}
          >
            <span className={styles.titleReviews}> Reviews</span>
          </NavLink>
        </div>
        <Route
          exact
          path={routes.CAST.path}
          component={routes.CAST.component}
        />
        <Route
          exact
          path={routes.REVIEWS.path}
          component={routes.REVIEWS.component}
        />
      </div>
    );
  }
}

export default MoviesDetailsPage;
