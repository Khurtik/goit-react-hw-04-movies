import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MoviesForm.module.css';

class MoviesForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { value: '' };

  handleChange = e => this.setState({ value: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={value}
          onChange={this.handleChange}
          type="text"
          className={styles.MoviesFormInput}
        />
        <button
          disabled={!value}
          type="submit"
          className={styles.MoviesFormButton}
        >
          Search
        </button>
      </form>
    );
  }
}

export default MoviesForm;
