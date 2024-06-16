// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';



// function ProductCard( {product, addToCart}) {
  
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src= "https://husto.co.ke/wp-content/uploads/2023/10/Air-Max-new-design.jpg"/>
//       <Card.Body>
//         <Card.Title>Puma</Card.Title>
//         <Card.Text>Smooth walking shoes</Card.Text>
//         <Card.Text>15</Card.Text>
        
//         <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
//         {/* <Button variant="danger" onClick={() => removeFromCart(product)}>Remove from Cart</Button> */}
//       </Card.Body>
//     </Card>
//   );
// }

// export default ProductCard;

// import React from 'react';

// const ProductCard = ({ product, addToCart }) => {
//   return (
//     <div>
//       <img src={product.image} alt={product.name} />
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>
//       <p>${product.price}</p>
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductCard;

// import React from 'react';

// const ProductCard = ({ product, addToCart }) => {
//   return (
//     <div className="card">
//       <img src={product.image} alt={product.name} className="card-img-top" />
//       <div className="card-body">
//        <h5 className="card-title">{product.name}</h5>
//         <p className="card-text">{product.description}</p>
//         <p className="card-text">${product.price}</p>
//         <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Price: ${product.price}</p>
        <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;




