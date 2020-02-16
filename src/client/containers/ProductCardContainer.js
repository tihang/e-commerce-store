/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import ProductCard from '../components/ProductCard';
import { getProductsRequest, getProductsSuccess } from '../redux';


function ProductCardContainer({
  filterArray, loading, fetchRequest, fetchSuccess
}) {
  // PRODUCTS STATE TO HOLD PRODUCTS COMING FROM BACKEND
  const [products, setProducts] = useState([]);

  // Loading spinner when products are being fetched
  const LoadingSpinner = () => <ReactLoading type="bars" color="#008e9b" height="300px" width="300px" />;

  useEffect(() => {
    fetchRequest();
    setProducts([]);
    Axios.post('/api/product/filter', { filterArray }).then((response) => {
      setProducts(response.data);
      fetchSuccess();
    }).catch(err => console.log(err));
  }, []);

  useEffect(() => {
    fetchRequest();
    setProducts([]);
    Axios.post('/api/product/filter', { filterArray }).then((response) => {
      setProducts(response.data);
      fetchSuccess();
    }).catch(err => console.log(err));
  }, [filterArray]);

  return (
    <div className="product-card-container">
      {/* Show loading state with Loading spinner */}
      {loading ? <LoadingSpinner /> : null}
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  filterArray: state.product.filter,
  loading: state.product.loading
});

const mapDispatchToProps = dispatch => ({
  fetchRequest: () => dispatch(getProductsRequest()),
  fetchSuccess: () => dispatch(getProductsSuccess())
});


ProductCardContainer.propTypes = {
  filterArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchRequest: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductCardContainer);
