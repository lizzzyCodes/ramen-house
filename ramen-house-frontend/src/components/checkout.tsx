import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const { total } = location.state || { total: 0 };

  return (
    <div>
      <h1>Checkout</h1>
      <p>Total Price: ${total.toFixed(2)}</p>
      {/* Additional checkout logic goes here */}
    </div>
  );
};

export default Checkout;
