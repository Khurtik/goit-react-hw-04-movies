import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';

const MoviesList = ({ items = [] }) => {
  return (
    <ul className={styles.moviesList}>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} className={styles.moviesItem}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default MoviesList;
