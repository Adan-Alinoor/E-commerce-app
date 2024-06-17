// // File: src/pages/ProductsPage.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Row, Col } from 'react-bootstrap';
// import ProductCard from '../components/ProductCard';

// const ProductsPage = ({ addToCart }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Replace with your API endpoint for fetching products
//     axios.get('http://localhost:8000/products/')
//       .then(response => {
//         setProducts(response.data); // Assuming API returns an array of products
//       })
//       .catch(error => {
//         console.error("Error fetching products:", error);
//         setProducts([]); // Set products to empty array on error
//       });
//   }, []);

//   return (
//     <Container className="mt-4">
//       <Row>
//         {products.map(product => (
//           <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
//             <ProductCard product={product} addToCart={addToCart} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default ProductsPage;


// import React from 'react'
// import axios from 'axios'
// import ProductCard from '../components/ProductCard'
// import {Col,Row,Container} from "react-bootstrap"
// import{useState,useEffect} from "react"

// const ProductsPage = ({ addToCart }) => {
//     const [products, setProducts] = useState([]);
  
//     useEffect(() => {
//       // Replace with your API endpoint for fetching products
//       axios.get('http://localhost:8000/products/')
//         .then(response => {
//           setProducts(response.data); // Assuming API returns an array of products
//         })
//         .catch(error => {
//           console.error("Error fetching products:", error);
//           setProducts([]); // Set products to empty array on error
//         });
//     }, []);
//   return (
//     <Container className="mt-10" style={{marginTop:10}}>
// <Row>
// {products.map(product => (
//           <Col key={product.id} className="mb-5">
//             <ProductCard product={product} addToCart={addToCart} />
//           </Col>
//         ))}
   
// </Row>
//     </Container>
//   )
// }

// export default ProductsPage


// File: src/pages/ProductsPage.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from '../components/ProductCard';
// import { Col, Row, Container } from 'react-bootstrap';

// const ProductsPage = ({ addToCart }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Replace with your API endpoint for fetching products
//     axios.get('http://localhost:8000/products/')
//       .then(response => {
//         setProducts(response.data); // Assuming API returns an array of products
//       })
//       .catch(error => {
//         console.error("Error fetching products:", error);
//         setProducts([]); // Set products to empty array on error
//       });
//   }, []);

//   return (
//     <Container className="mt-10" style={{ marginTop: 10 }}>
//       <Row>
//         {products.map(product => (
//           <Col key={product.id} className="mb-5">
//             <ProductCard product={product} addToCart={addToCart} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default ProductsPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { Col, Row, Container } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const ProductsPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint for fetching products
    axios.get('http://localhost:8000/products/')
      .then(response => {
        setProducts(response.data); // Assuming API returns an array of products
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setProducts([]); // Set products to empty array on error
      });
  }, []);

  return (
    <Container className="mt-10" style={{ marginTop: 10 }}>
      <Row>
        <Col xs={12} className="mb-4">
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Mens Fotwear</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </Col>
        {products.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-5">
            <ProductCard product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsPage;
