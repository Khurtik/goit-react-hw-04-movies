import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reviews.module.css';
import * as moviesAPI from '../../services/api';

class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string,
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    reviews: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    moviesAPI
      .fetchReviewsWithId(id)
      .then(reviews => this.setState({ reviews }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul className={styles.reviewsList}>
        {reviews.length > 0 ? (
          reviews.map(item => (
            <div key={item.id}>
              <p>
                <span className={styles.reviewsAuthor}>Author</span> :{' '}
                {item.author}
              </p>
              <p className={styles.reviewsContent}>{item.content}</p>
            </div>
          ))
        ) : (
          // eslint-disable-next-line react/no-unescaped-entities
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    );
  }
}

export default Reviews;
