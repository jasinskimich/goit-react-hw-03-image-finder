import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onImageClick(this.props.image);
  };

  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css['ImageGalleryItem-image']}
          src={this.props.image.webformatURL}
          alt=""
          onClick={this.handleClick}
          loading="lazy"
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
