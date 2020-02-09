import React from 'react';

function CartSummary() {
  return (
    <div className="cart-summary-component">
      <h3 className="summary-heading">ORDER SUMMARY</h3>
      <div className="summary-container">
        <div className="summary-item">
          <span className="summary-label">3 Items</span>
          <span className="summary-value">$300</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Delivery</span>
          <span className="summary-value">Free</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Sales Tax</span>
          <span className="summary-value">---</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Total</span>
          <span className="summary-value">$300</span>
        </div>
      </div>
    </div>
  );
}
export default CartSummary;
