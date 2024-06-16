// import React, { useState } from 'react';
// import axios from 'axios';

// function Order() {
//   const [customerName, setCustomerName] = useState('');
//   const [customerEmail, setCustomerEmail] = useState('');
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     axios.post('http://localhost:8000/orders/', {
//       customer_name: customerName,
//       customer_email: customerEmail,
//       total_amount: 150,  // Example total amount, you can calculate based on cart items
//     })
//     .then(response => {
//       setOrderPlaced(true);
//       setError('');
//     })
//     .catch(error => {
//       setError("There was an error placing the order!");
//       console.error("There was an error placing the order!", error);
//     });
//   };

//   return (
//     <div className="container">
//       <h2>Place Order</h2>
//       {orderPlaced ? (
//         <div className="alert alert-success" role="alert">
//           Your order has been placed successfully!
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="customerName">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="customerName"
//               value={customerName}
//               onChange={(e) => setCustomerName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="customerEmail">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               id="customerEmail"
//               value={customerEmail}
//               onChange={(e) => setCustomerEmail(e.target.value)}
//               required
//             />
//           </div>
//           {error && (
//             <div className="alert alert-danger" role="alert">
//               {error}
//             </div>
//           )}
//           <button type="submit" className="btn btn-primary">Place Order</button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default Order;
