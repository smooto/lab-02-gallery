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
          <p>Filter by number of horns:</p>
          <select onChange={ this.handleChange }>
              <option value="" defaultValue>View All</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="100">100 Horns</option>
          </select>
          <ul>
            {images
              .filter(image => {
                if (!this.state.selected) return true;

                return image.horns === parseInt(this.state.selected);
              })
              .map(filteredImage => {
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

