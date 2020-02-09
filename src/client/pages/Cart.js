import React from 'react';
import CartItemContainer from '../containers/CartItemContainer';
import CartSummaryContainer from '../containers/CartSummaryContainer';

export default function Cart() {
  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Bag</h2>
      <div className="cart-page-container">
        <React.Fragment>
          <CartItemContainer />
          <CartSummaryContainer />
        </React.Fragment>
      </div>
    </div>
  );
}
