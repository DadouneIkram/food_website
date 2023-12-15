import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <>
      <div className="all">
        <div className="head-info">
          <h2>Good food choices are good investments.</h2>
          <p style={{
            color: 'gray'
          }}>Delicious pizzas delivered right to your doorstep!</p>
          <div className='button-cont'>
            <button  className='search-button' variant="danger">Order Now</button>
            <button className='search-button' variant="danger">View Menu</button>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default Header;
