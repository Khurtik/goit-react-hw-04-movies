import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as moviesAPI from '../../services/api';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import styles from './Cast.module.css';

class Cast extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    cast: [],
    error: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    moviesAPI
      .fetchCastWithId(id)
      .then(cast => this.setState({ cast }))
      .catch(error => this.setState({ error }))
      .finally(() =>
        window.scrollTo({
          top: 425,
          behavior: 'smooth',
        }),
      );
  }

  render() {
    const { cast, error } = this.state;

    return (
      <>
        {error && <NotFoundPage />}
        {cast.length > 0 ? (
          <ul className={styles.castList}>
            {cast.map(item => (
              <div key={item.id} className={styles.castItem}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.profile_path}`}
                  alt={item.name}
                  className={styles.castImg}
                />
                <p className={styles.castName}>{item.name}</p>
                <p className={styles.castCharacter}>
                  <span>Character:</span> {item.character}
                </p>
              </div>
            ))}
          </ul>
        ) : (
          // eslint-disable-next-line react/no-unescaped-entities
          <p>We don't have any photos for this movie.</p>
        )}
      </>
    );
  }
}

export default Cast;
