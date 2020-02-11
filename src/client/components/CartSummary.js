/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

const handleToken = (token) => {
  console.log(token);
};

const getTotal = (items = []) => items
  .reduce((accmulator, item) => accmulator += (item.price * item.count), 0);

function CartSummary({ items }) {
  return (
    <div className="cart-summary-component">
      <h3 className="summary-heading">ORDER SUMMARY</h3>
      <div className="summary-container">
        <div className="summary-item">
          <span className="summary-label">{`${items.length} Items`}</span>
          <span className="summary-value">{`$${getTotal(items)}`}</span>
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
          <span className="summary-value">{`$${getTotal(items)}`}</span>
        </div>
        <StripeCheckout
          name="Checkout"
          stripeKey="pk_test_svmEPVMAHL0JkgJVOB9l9joz00Os4dDgY0"
          billingAddress
          shippingAddress
          price={getTotal(items) * 100}
          token={handleToken}
        />
      </div>
    </div>
  );
}

CartSummary.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  items: state.cart.items
});

export default connect(mapStateToProps, null)(CartSummary);
