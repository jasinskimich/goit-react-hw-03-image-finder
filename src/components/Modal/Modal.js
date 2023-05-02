import React, { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClose = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={css.Overlay} onClick={this.handleClose}>
        <div className={css.Modal}>
          <img src={this.props.image.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Modal;