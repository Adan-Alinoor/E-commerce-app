// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">E-commerce</Link>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link className="nav-link" to="/">Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/cart">Cart</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/order">Order</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="nav-bar">
      <div>
          <img src={logo} alt="logo" className="logo" />
      </div>
      <div>
        <Link to="/">HOME</Link>
      </div>
      <div>
        <Link to="/products">SHOP</Link>
      </div>
      <div>
        <Link to="/orders">ORDERS</Link>
      </div>
      <div className='Shopping-cart'>
        <Link to="/cart"><FontAwesomeIcon icon={faCartShopping}/></Link>
      </div>
    </div>
  );
}

export default Navbar;

