import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ProductCard from '../components/ProductCard';


function ProductCardContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get('/api/product/index').then((response) => {
      setProducts(response.data);
    }).catch(err => console.log(err));
  }, []);

  return (
    <div className="product-card-container">
      {products.map(product => (
        // eslint-disable-next-line no-underscore-dangle
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductCardContainer;
