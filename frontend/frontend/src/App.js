// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import ProductPage from './pages/ProductPage';
// import CartPage from './pages/CartPage';
// import OrderPage from './pages/OrderPage';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products/:id" element={<ProductPage />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/order" element={<OrderPage />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar'
// import Footer from './components/Footer';
// import Homepage from './pages/HomePage';
// import Products from"./pages/Products";
// import CartPage from './pages/CartPage'
// import OrderPage from './pages/OrderPage'
// import ProductCard from './components/ProductCard';
// import {Link} from "react-router-dom"
// import Switch from "react"
// //import ProductList from './components/ProductList';

// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {

//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (product) => {
//     setCart(cart.filter(item => item.id !== product.id));
//   };


// //   return (
// //     <>
// //     <Router>
// //       <div>
// //         <Navbar />
// //         <Routes>
// //         <Route path="/" element={<Homepage />} />
// //           {/* <Route path="/products/:id" element={<ProductPage />} /> */}
// //           <Route path="/products" element={<Products/>} /> {/* Placeholder for Products List Page */}
// //           <Route path="/cart" element={<CartPage />} />
        
// //         </Routes>
// //         {/* <Footer /> */}
// //       </div>
// //     </Router>
// //     {/* <ProductCard/> */}
   
// //   </>
// //   );
// // }

// // export default App;

// return (
//   <Router>
//     <div>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/cart">Cart ({cart.length})</Link>
//       </nav>
//       <Switch>
//         <Route path="/" exact component={HomePage} />
//         <Route path="/products">
//           <ProductsPage addToCart={addToCart} />
//         </Route>
//         <Route path="/cart">
//           <CartPage cart={cart} removeFromCart={removeFromCart} />
//         </Route>
//       </Switch>
//     </div>
//   </Router>
// );
// };

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import ProductsPage from './pages/Products';
// import CartPage from './pages/CartPage';

// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (product) => {
//     setCart(cart.filter((item) => item.id !== product.id));
//   };

//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/products">Products</Link>
//           <Link to="/cart">Cart ({cart.length})</Link>
//         </nav>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />
//           <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/products/')
      .then(response => {
        console.log("API Response:", response.data); // Log the response to verify its structure
        if (response.data && response.data.products && Array.isArray(response.data.products)) {
          setProducts(response.data.products); // Update products state with API data
        } else {
          console.error("API response does not contain expected products array", response.data);
          setProducts([]); // Fallback to empty array if response structure is unexpected
        }
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setProducts([]); // Ensure products state is set to empty array on error
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="row">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="col-md-4">
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
