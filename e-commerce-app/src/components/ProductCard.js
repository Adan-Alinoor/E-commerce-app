// // File: src/components/ProductCard.js

// import React from 'react';
// import { Card, Button } from 'react-bootstrap';

// const ProductCard = ({ product, addToCart }) => {
//   return (
//     <Card className="mb-4">
//       <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
//       <Card.Body>
//         <Card.Title>{product.name}</Card.Title>
//         <Card.Text>{product.description}</Card.Text>
//         <Button variant="primary" onClick={() => addToCart(product)}>
//           Add to Cart
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default ProductCard;

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function ProductCard() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default ProductCard;


// File: src/components/ProductCard.js

// File: src/components/ProductCard.js
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ product, addToCart }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image || 'holder.js/100px180'} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;


