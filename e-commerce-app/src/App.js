// File: src/App.js

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import HomePage from './pages/Homepage';
// import ProductsPage from './pages/ProductsPage';
// import CartPage from './pages/CartPage';

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   const removeFromCart = (productId) => {
//     const updatedCart = cartItems.filter(item => item.id !== productId);
//     setCartItems(updatedCart);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route
//             path="/products"
//             element={<ProductsPage addToCart={addToCart} />}
//           />
//           <Route
//             path="/cart"
//             element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />}
//           />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


// File: src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products"
            element={<ProductsPage addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
