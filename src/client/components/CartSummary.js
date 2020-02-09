import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

const handleToken = (token) => {
  console.log(token);
};
function CartSummary({ total }) {
  return (
    <div className="cart-summary-component">
      <h3 className="summary-heading">ORDER SUMMARY</h3>
      <div className="summary-container">
        <div className="summary-item">
          <span className="summary-label">3 Items</span>
          <span className="summary-value">{`$${total}`}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Delivery</span>
          <span className="summary-value">Free</span>
        </div>
        <div className="summary-item underline">
          <span className="summary-label">Sales Tax</span>
          <span className="summary-value">---</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Total</span>
          <span className="summary-value">{`$${total}`}</span>
        </div>
        <StripeCheckout
          name="Checkout"
          stripeKey="pk_test_svmEPVMAHL0JkgJVOB9l9joz00Os4dDgY0"
          billingAddress
          shippingAddress
          price={total * 100}
          token={handleToken}
        />
      </div>
    </div>
  );
}

CartSummary.propTypes = {
  total: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  total: state.cart.total
});

export default connect(mapStateToProps, null)(CartSummary);
