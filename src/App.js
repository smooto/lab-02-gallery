import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js';
import ImageList from './ImageList';
import images from './data.js';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section>
        <p>Filter by number of horns:</p>
        <select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
        </select>
        <ul>
          <ImageList></ImageList>
        </ul>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
