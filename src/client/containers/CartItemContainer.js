import React from 'react';
import CartItem from '../components/CartItem';

export default function CartItemContainer() {
  return (
    <div className="cart-item-container">
      <CartItem />
      <CartItem />
    </div>
  );
}
