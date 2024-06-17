// File: src/pages/CartPage.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import ProductCard from '../components/ProductCard';

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="mb-3">
                <p>{item.name}</p>
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </div>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;


// const CartPage = ({ cartItems, removeFromCart }) => {
//   return (
//     <Container>
//       <Row>
//         {cartItems.map(item => (
//           <Col key={item.id} className="mb-4">
//             <ProductCard product={item} removeFromCart={removeFromCart} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default CartPage;

