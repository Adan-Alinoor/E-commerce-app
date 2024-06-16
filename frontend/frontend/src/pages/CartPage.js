// import React from 'react';
// import Cart from '../components/Cart';

// function CartPage() {
//   return (
//     <div>
//       <di>cartpage</di>
//     </div>
//   );
// }

// export default CartPage;

import React from 'react';

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cart.map(item => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
