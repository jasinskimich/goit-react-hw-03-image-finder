import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={css['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          ></input>
          <button type="submit" className={css['SearchForm-button']}>
            Search
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
