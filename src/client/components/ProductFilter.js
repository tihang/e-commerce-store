import React from 'react';
import { Dropdown } from 'react-bootstrap';

function ProductFilter() {
  return (
    // Wrapper Div
    <div className="product-filter-component">
      {/* Gender Select Filter */}
      <div className="filter-category">
        <Dropdown>
          <Dropdown.Toggle className="filter-dropdown" variant="secondary" id="dropdown-basic">
            Gender
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className="check-items">
              <label htmlFor="check-men" className="container">
                <input type="checkbox" onChange={e => e.target.checked} id="check-men" value="men" />
                <span className="checkmark" />
              Men
              </label>
              <label htmlFor="check-women" className="container">
                <input type="checkbox" onChange={e => e.target.checked} id="check-women" value="women" />
                <span className="checkmark" />
              Women
              </label>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {/* Color Select Filter */}
      <div className="filter-category">
        <Dropdown>
          <Dropdown.Toggle className="filter-dropdown" variant="secondary" id="dropdown-basic">
            Color
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className="check-items">
              <label htmlFor="check-black" className="container">
                <input type="checkbox" onChange={e => e.target.checked} id="check-black" value="black" />
                <span className="checkmark" />
              Black
              </label>
              <label htmlFor="check-white" className="container">
                <input type="checkbox" onChange={e => e.target.checked} id="check-white" value="white" />
                <span className="checkmark" />
              White
              </label>
              <label htmlFor="check-blue" className="container">
                <input type="checkbox" onChange={e => e.target.checked} id="check-blue" value="blue" />
                <span className="checkmark" />
              Blue
              </label>
              <label htmlFor="check-green" className="container">
                <input type="checkbox" onChange={e => e.target.checked} id="check-green" value="green" />
                <span className="checkmark" />
              Green
              </label>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {/* Price Select Filter */}
      <div className="filter-category">
        <Dropdown>
          <Dropdown.Toggle className="filter-dropdown" variant="secondary" id="dropdown-basic">
            Price
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className="check-items">
              <label htmlFor="check-under-100" className="container">
                <input type="checkbox" onChange={e => e.target.checked} id="check-under-100" value="lessthan100" />
                <span className="checkmark" />
              Less than $100
              </label>
              <label htmlFor="check-100-to-150" className="container">
                <input type="checkbox" onChange={e => e.target.checked} id="check-100-to-150" value="100to150" />
                <span className="checkmark" />
              $100 to $150
              </label>
              <label htmlFor="check-150-or-more" className="container">
                <input type="checkbox" onChange={e => e.target.checked} id="check-150-or-more" value="150ormore" />
                <span className="checkmark" />
              $150 or more
              </label>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="sort-filter">
        <label htmlFor="sort-select">
        Sort By:
          <select name="sort-select" id="sort-select">
            <option value="popular">Popular</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to low</option>
          </select>
        </label>
      </div>
    </div>
  );
}
export default ProductFilter;
