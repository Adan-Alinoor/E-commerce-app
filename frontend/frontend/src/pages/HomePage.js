import React from 'react';

import logo from '../assets/logo.png';
import woman from '../assets/woman.png';
import './Homepage.css';

function Homepage() {
  return (
    <div className="banner">
      <div className="nav-bar">
       
      </div>
      <div className="model">
        <div id="model-pic">
          <img src={woman} alt="model" className="model-img" />
        </div>
        <div className="text">
          <h3 className="new-arrival"></h3>
          <h1>JUST FOR</h1>
          <h1 id="you">YOU</h1>
          <span className="online-order">
            <h2 id="order">
              FOR ONLINE <br />
              <span>ORDER</span>
            </h2>
            <h2>
              30%
              <br />
              OFF
            </h2>
          </span>
          <p className="description">
            Welcome to our e-commerce store! Discover a wide range of products at amazing prices. Enjoy seamless shopping and great discounts. Shop now and experience the best online shopping experience!
          </p>
        </div>
      </div>
      <div className="footer">
        <h3>
          <i className="fa fa-copyright" aria-hidden="true"></i> Company Name
          2020. All rights reserved
        </h3>
        {/* <div>
          <ProductList />
        </div> */}
        
      </div>
    </div>
  );
}

export default Homepage;
