import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartItem from '../components/CartItem';
import { removeFromCart } from '../redux';

function CartItemContainer({ items, removeItem }) {
  return (

    <div className="cart-item-container">
      {items.map(item => (
        <CartItem key={item.id} item={item} removeItem={removeItem} />
      ))}
    </div>
  );
}

CartItemContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.cart.items
});

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeFromCart(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(CartItemContainer);
