import React from 'react';
import CartItemContainer from '../containers/CartItemContainer';

export default function Cart() {
  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Bag</h2>
      <CartItemContainer />
    </div>
  );
}
