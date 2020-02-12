import React from 'react';
import ProductCardContainer from '../containers/ProductCardContainer';
import ProductFilter from '../components/ProductFilter';

export default function Collections() {
  return (
    <div className="collection-page">
      <h2 className="collection-title">Explore</h2>
      <ProductFilter />
      <ProductCardContainer />
    </div>
  );
}
