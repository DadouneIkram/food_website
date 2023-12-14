import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <>
      <div className="all">
        <div className="head-info">
          <h2>Good food choices are good investments.</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, perspiciatis.</p>
          <div className='button-cont'>
            <button  className='search-button' variant="danger">Order Now</button>
            <button className='search-button' variant="danger">Learn More</button>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default Header;
