import React from 'react';
import ac from './images/ac.png';
import './App.css';

function Header() {
  return (
    <section>
      <div className='header-intro'>
        <img className='header-leaf' src={ac} alt='animal crossing leaf' />
        <h1>Animal Crossing Art Work</h1>
      </div>
    </section>
  );
}

export default Header;