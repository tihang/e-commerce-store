import React from 'react';

export default function ProductFilter() {
  return (
    <div className="product-filter-component">
      <label htmlFor="sort-select">
        Sort By:
        <select name="sort-select" id="sort-select">
          <option value="popular">Popular</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to low</option>
        </select>
      </label>
    </div>
  );
}
