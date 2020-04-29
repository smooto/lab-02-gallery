import React, { Component } from 'react';
import Header from './Header.js'
import Footer from './Footer.js';
// import ImageList from './ImageList';
import images from './data.js';
import './App.css';
import ImageItem from './ImageItem.js';

export default class App extends Component {
  // init state as null -- nothing selected
  state = { selected: null }

  // create function to update state based on change to `select`
  handleChange = (e) => {
    this.setState({ selected: e.target.value });
    console.log(e.target.value);
  }

  render() {
    return (
      <>
        <Header></Header>
        <main>
          <section>
          <p>Filter by keyword:</p>
          <select onChange={ this.handleChange }>
              <option value="" defaultValue>View All</option>
              <option value="narwhal">narwhal</option>
              <option value="rhino">rhino</option>
              <option value="unicorn">unicorn</option>
              <option value="unilego">unilego</option>
              <option value="triceratops">triceratops</option>
              <option value="markhor">markhor</option>
              <option value="mouflon">mouflon</option>
              <option value="addax">addax</option>
              <option value="chameleon">chameleon</option>
              <option value="lizard">lizard</option>
              <option value="dragon">dragon</option>
          </select>
          <ul>
            {images
              .filter(image => {
                // if `state.selected` has value of null, return true for all items
                if (!this.state.selected) return true;

                // if `state.selected` has value of a keyword, return true only for items with that keyword
                return image.keyword === this.state.selected;
              })
              .map(filteredImage => {
                // return ImageItem element for each item that passed the filter
                return <ImageItem imageObject={filteredImage}></ImageItem>
              })
            }
          </ul>
          </section>
        </main>
        <Footer></Footer>
      </>
    );
  }
}

