import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';


class Loader extends Component {
    render() {
      return (
        <div className={css.Loader}>
          <ThreeDots
            height="60"
            width="80"
            radius="16"
            color="#3f51b5"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </div>
      );
    }
  }
  
  export default Loader;