/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Movie.module.css';

const Movie = ({ title, poster_path, overview, genres, onGoback }) => (
  <article className={styles.articleMovie}>
    <div className={styles.buttonImg}>
      <button type="button" onClick={onGoback} className={styles.button}>
        Go Back
      </button>
      <img
        className={styles.movieImg}
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt=""
      />
    </div>
    <div className={styles.titleList}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.Overview}>Overview</h3>
      <p className={styles.overviewText}>{overview}</p>
      <h3 className={styles.Genres}>Genres</h3>
      <p>
        {genres.map(item => (
          <li className={styles.genresItem} key={item.id}>
            {item.name}
          </li>
        ))}
      </p>
    </div>
  </article>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onGoback: PropTypes.func.isRequired,
};

export default Movie;
