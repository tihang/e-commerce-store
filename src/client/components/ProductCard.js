import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useAlert } from 'react-alert';
import { addToCart } from '../redux';

function ProductCard({ product, addItem }) {
  const alert = useAlert();

  return (
    <div className="product-card-component">
      <div className="product-image-container">
        <div className="product-card-overlay">
          <button className="product-detail-button" type="button" onClick={() => { addItem(product); alert.success('Added to Bag'); }}>
          Quick Add
            {' '}
            <i className="fas fa-shopping-bag" />
          </button>
          <button className="product-detail-button" type="button">
          Details
          </button>
        </div>
        <img alt="Product img" src={product.imgUrl} />
      </div>
      <div className="product-detail-container">
        <p className="product-detail-text">{product.name}</p>
        <p className="product-detail-price">{`$ ${product.price}`}</p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  addItem: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addItem: product => dispatch(addToCart(product))
});


export default connect(null, mapDispatchToProps)(ProductCard);
