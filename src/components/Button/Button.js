import React, { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <button className={css.Button} onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Button;
