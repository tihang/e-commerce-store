import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ name, price, imgUrl }) {
  return (
    <div className="product-card-component">
      <div className="product-image-container">
        <img alt="Product img" src={imgUrl} />
      </div>
      <div className="product-detail-container">
        <p className="product-detail-text">{name}</p>
        <p className="product-detail-price">{`$ ${price}`}</p>
        <button className="product-detail-button" type="button">
          Add
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired
};

export default ProductCard;
