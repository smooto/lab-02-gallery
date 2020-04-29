import React, { Component } from 'react';
import Header from './Header.js'
import Footer from './Footer.js';
// import ImageList from './ImageList';
import images from './data.js';
import './App.css';
import ImageItem from './ImageItem.js';

export default class App extends Component {
  // init state as null -- nothing selected
  state = { 
    // hasBeenChanged: false,
    selectedKeyword: null,
    // selectedHorns: null
  }

  // create function to update state based on change to `select`

  handleChangedKeyword = (e) => {
    this.setState({ 
      // hasBeenChanged: true,
      selectedKeyword: e.target.value,
      // selectedHorns: null 
    });
  }

  // handleChangedHorns = (e) => {
  //   const parsedValue = parseInt(e.target.value);
  //   this.setState({ 
  //     hasBeenChanged: true,
  //     selectedKeyword: null, 
  //     selectedHorns: parsedValue 
  //   });
  // }

  render() {
    return (
      <>
        <Header></Header>
        <main>
          <section>
          <p>Filter by keyword:</p>
          <select onChange={ this.handleChangedKeyword }>

              {images
                .map(image => {
                  return <option value={image.keyword}>{image.keyword}</option>
                })}

              {/* <option value="" defaultValue>View All</option>
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
              <option value="dragon">dragon</option> */}
          </select>
          {/* <p>Filter by horns:</p>
          <select onChange={ this.handleChangedHorns }>
              <option value="" defaultValue>View All</option>
              <option value="1">1 horn</option>
              <option value="2">2 horns</option>
              <option value="3">3 horns</option>
              <option value="100">100 horns</option>
          </select> */}
          <ul>
            {images
              .filter(image => {
                
                let filteredBy = image.keyword;
                let filteringState = this.state.selectedKeyword;
                let result = (filteredBy === filteringState);

                if (!this.state.selectedKeyword) { result = true }
                // if no change has been made, return all items
                // if (!this.state.hasBeenChanged) {
                //   result = true;
                // }
                // else {
                //   if (this.state.selectedHorns) {
                //     filteredBy = image.horns;
                //     filteringState = this.state.selectedHorns;
                //   }
                // }

                return result;
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

