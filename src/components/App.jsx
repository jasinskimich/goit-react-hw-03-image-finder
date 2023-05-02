import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    selectedImage: null,
    prevQuery: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { query, page } = this.state;
    const perPage = 12;
    const apiKey = '33371363-d0431b264357eef04487873b0';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&pretty=true&page=${page}&per_page=${perPage}`;

    this.setState({ isLoading: true });

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }

      const data = await response.json();
      if (data.totalHits === 0) {
        throw new Error('No images found for the given query');
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
      }));

      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 500);
    } catch (error) {
      console.error(error.message);
      this.setState({ isLoading: false });
    }
  };
  // SEARCH
  handleSearch = query => {
    if (query !== this.state.prevQuery) {
      this.setState({ query, images: [], page: 1, prevQuery: query });
    }
  };
  // BUTTON
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  // MODAL
  handleImageClick = image => {
    this.setState({ showModal: true, selectedImage: image });
  };
  closeModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  render() {
    const { images, isLoading, showModal, selectedImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore}></Button>
        )}
        {showModal && <Modal image={selectedImage} onClose={this.closeModal} />}
      </div>
    );
  }
}
export default App;
