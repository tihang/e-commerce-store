import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFromCart } from '../redux';

function CartItem({ items, removeItem }) {
  return (
    <React.Fragment>
      {items.map(item => (
        <div key={item.id} className="cart-item-component">
          <div className="cart-item-container">
            <img src={item.imgUrl} alt="Item img" />
            <p className="cart-item-description">{item.name}</p>
            <p>{item.price}</p>
            <button type="button" onClick={() => removeItem(item)}>Remove</button>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

CartItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.cart.items,
});

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeFromCart(item))
});


export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
