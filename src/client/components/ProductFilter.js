import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setColorFilterAction, unsetColorFilterAction } from '../redux';


function ProductFilter({ setColorFilter, unsetColorFilter }) {
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setColorFilter(e.target.value);
    } else {
      unsetColorFilter(e.target.value);
    }
  };


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
                <input type="checkbox" onChange={handleCheckboxChange} id="check-black" name="Black" value="Black" />
                <span className="checkmark" />
              Black
              </label>
              <label htmlFor="check-white" className="container">
                <input type="checkbox" onChange={handleCheckboxChange} id="check-white" name="White" value="White" />
                <span className="checkmark" />
              White
              </label>
              <label htmlFor="check-blue" className="container">
                <input type="checkbox" onChange={handleCheckboxChange} id="check-blue" name="Blue" value="Blue" />
                <span className="checkmark" />
              Blue
              </label>
              <label htmlFor="check-green" className="container">
                <input type="checkbox" onChange={handleCheckboxChange} id="check-green" name="Green" value="Green" />
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

// const mapStateToProps = state => ({
//   color: state.product.color
// });


const mapDispatchToProps = dispatch => ({
  setColorFilter: filter => dispatch(setColorFilterAction(filter)),
  unsetColorFilter: filter => dispatch(unsetColorFilterAction(filter))
});

ProductFilter.propTypes = {
  setColorFilter: PropTypes.func.isRequired,
  unsetColorFilter: PropTypes.func.isRequired
};


export default connect(null, mapDispatchToProps)(ProductFilter);
