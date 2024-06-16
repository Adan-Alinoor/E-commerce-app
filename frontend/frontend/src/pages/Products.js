// // // import React, { useState, useEffect } from 'react';
// // // import ProductCard from '../components/ProductCard';
// // // import Container from "react-bootstrap/Container";
// // // import { Col, Row, Dropdown } from "react-bootstrap";

// // // const mockProducts = new Array(12).fill().map((__, index) => ({
// // //   id: index,
// // //   name: `Product ${index + 1}`,
// // //   description: `Description of product ${index + 1}`,
// // //   price: (index + 1) * 10,
// // //   image: 'https://via.placeholder.com/150'
// // // }));

// // // function Products() {
// // //   const [products, setProducts] = useState([]);

// // //   useEffect(() => {
// // //     fetch('http://localhost:8000/products/')
// // //       .then(response => response.json())
// // //       .then(data => setProducts(data))
// // //       .catch(error => console.error('Error fetching products:', error));
// // //   }, []);


// // //   return (
// // //     <div>
// // //       <Dropdown>
// // //         <Dropdown.Toggle variant="success" id="dropdown-basic">
// // //           Categories
// // //         </Dropdown.Toggle>
// // //         <Dropdown.Menu>
// // //           <Dropdown.Item href="#/action-1">Men Footwear</Dropdown.Item>
// // //           <Dropdown.Item href="#/action-2">Womens Footwear</Dropdown.Item>
// // //           <Dropdown.Item href="#/action-3">Childrens Footwear</Dropdown.Item>
// // //         </Dropdown.Menu>
// // //       </Dropdown>
// // //       <div>
// // //       <h2>Products</h2>
// // //       <ul>
// // //         {products.map(product => (
// // //           <li key={product.id}>
// // //             {product.name} - ${product.price}
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //       <Container className="mt-10" style={{ marginTop: 10 }}>
// // //         <Row>
// // //           {products.map((product) => (
// // //             <Col key={product.id} className='mb-5'>
// // //               <ProductCard 
// // //                 product={product}
// // //               />
// // //             </Col>
// // //           ))}
// // //         </Row>
// // //       </Container>
// // //     </div>
// // //   );
// // // }

// // // export default Products;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import ProductCard from '../components/ProductCard'

// // const Products = ({ addToCart }) => {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:8000/products/')
// //       .then(response => {
// //         setProducts(response.data);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Products</h1>
// //       <div>
// //         {products.map(product => (
// //           <ProductCard key={product.id} product={product} addToCart={addToCart} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Products;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import ProductCard from '../components/ProductCard';

// // const Products = ({ addToCart }) => {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:8000/products/')
// //       .then(response => {
// //         console.log(response.data); // Log the response to verify its structure
// //         setProducts(response.data);
// //       })
// //       .catch(error => {
// //         console.error("There was an error fetching the products!", error);
// //         setProducts([]); // Ensure products is set to an empty array in case of error
// //       });
// //   }, []);

// //   if (!Array.isArray(products)) {
// //     console.error("Expected products to be an array", products);
// //     return <div>Error loading products.</div>;
// //   }

// //   return (
// //     <div>
// //       <h1>Products</h1>
// //       <div className="row">
// //         {products.map(product => (
// //           <div key={product.id} className="col-md-4">
// //             <ProductCard product={product} addToCart={addToCart} />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Products;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from '../components/ProductCard';

// const Products = ({ addToCart }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/products/')
//       .then(response => {
//         console.log("API Response:", response.data); // Log the response to verify its structure
//         if (response.data && Array.isArray(response.data.products)) {
//           setProducts(response.data.products);
//         } else {
//           console.error("API response does not contain a products array", response.data);
//           setProducts([]); // Fallback to empty array if response is not an array
//         }
//       })
//       .catch(error => {
//         console.error("There was an error fetching the products!", error);
//         setProducts([]); // Ensure products is set to an empty array in case of error
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Products</h1>
//       <div className="row">
//         {products.length > 0 ? (
//           products.map(product => (
//             <div key={product.id} className="col-md-4">
//               <ProductCard product={product} addToCart={addToCart} />
//             </div>
//           ))
//         ) : (
//           <p>No products available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard  from '../components/ProductCard'

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/products/')
      .then(response => {
        console.log("API Response:", response.data); // Log the response to verify its structure
        if (response.data && Array.isArray(response.data)) {
          setProducts(response.data); // Assuming API returns an array directly
        } else {
          console.error("API response does not contain a products array", response.data);
          setProducts([]); // Fallback to empty array if response is not an array
        }
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
        setProducts([]); // Ensure products is set to an empty array in case of error
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


