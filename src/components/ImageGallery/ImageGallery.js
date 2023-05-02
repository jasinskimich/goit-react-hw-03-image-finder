import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.ImageGallery}>
        {this.props.images.map((image, index) => (
          <ImageGalleryItem
            key={`${index}_${image.id}`}
            image={image}
            onImageClick={this.props.onImageClick}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
export default ImageGallery;
