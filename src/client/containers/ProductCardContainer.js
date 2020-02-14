/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect } from 'react-redux';
import ProductCard from '../components/ProductCard';


function ProductCardContainer({ color }) {
  // PRODUCTS STATE TO HOLD PRODUCTS COMING FROM BACKEND
  const [products, setProducts] = useState([]);


  useEffect(() => {
    Axios.post('/api/product/filter', { color }).then((response) => {
      setProducts(response.data);
    }).catch(err => console.log(err));
  }, []);
  useEffect(() => {
    Axios.post('/api/product/filter', { color }).then((response) => {
      setProducts(response.data);
    }).catch(err => console.log(err));
  }, [color]);

  return (
    <div className="product-card-container">
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  color: state.product.filter.color
});

ProductCardContainer.propTypes = {
  color: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default connect(mapStateToProps, null)(ProductCardContainer);
