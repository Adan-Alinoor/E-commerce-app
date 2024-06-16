// import React from 'react';

// function Cart() {
//   // Mock cart data
//   const cartItems = [
//     { id: 1, name: 'Product 1', price: 100, quantity: 2 },
//     { id: 2, name: 'Product 2', price: 50, quantity: 1 },
//   ];

//   const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="container">
//       <h2>Shopping Cart</h2>
//       <div className="row">
//         <div className="col-md-8">
//           <ul className="list-group">
//             {cartItems.map(item => (
//               <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
//                 {item.name}
//                 <span className="badge badge-primary badge-pill">${item.price} x {item.quantity}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="col-md-4">
//           <h4>Total: ${total}</h4>
//           <button className="btn btn-primary">Proceed to Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;
