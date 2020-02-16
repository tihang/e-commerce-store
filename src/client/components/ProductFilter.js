import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  setColorFilterAction, unsetColorFilterAction,
  setPriceFilterAction, unsetPriceFilterAction
} from '../redux';


function ProductFilter({
  filterArray, setColorFilter, unsetColorFilter, setPriceFilter, unsetPriceFilter
}) {
  // Filter overlay toggle state for small screens
  const [filterToggle, setFilterToggle] = useState(false);

  // COLOR FILTER FUNCTION HANDLERS
  // Handler to set/unset redux color filter array
  const handleColorCheckboxChange = (e) => {
    if (e.target.checked) {
      setColorFilter(e.target.value);
    } else {
      unsetColorFilter(e.target.value);
    }
  };
  // Handler for checkbox input checked
  // Returns true if given color is in redux state
  const isColorChecked = color => (!!filterArray.color.includes(color));

  // Handler to set/unset redux price filter array
  const handlePriceCheckboxChange = (e) => {
    if (e.target.checked) {
      setPriceFilter(e.target.value);
    } else {
      unsetPriceFilter(e.target.value);
    }
  };

  const isPriceChecked = price => (!!filterArray.price.includes(price));


  return (
    <React.Fragment>
      <div className="filter-toggle-button-wrapper">
        {/* Sort select for small screens */}
        <div className="sort-filter">
          <label htmlFor="sort-select">
            <p>Sort By:</p>
            <select name="sort-select" id="sort-select">
              <option value="popular">Popular</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to low</option>
            </select>
          </label>
        </div>
        {/* Filter Toggeler for small screens */}
        <button className="filter-button" type="button" onClick={() => setFilterToggle(filter => !filter)}>
          <p>Filters</p>
          <i className="far fa-chart-bar" />
        </button>
      </div>
      {/* // Wrapper Div */}
      <div className={filterToggle ? 'product-filter-component' : 'product-filter-component hide'}>
        {/* Color Select Filter */}
        <div className="filter-category">
          <Dropdown>
            <Dropdown.Toggle className="filter-dropdown" variant="info" id="dropdown-basic">
            Color
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="check-items">
                <label htmlFor="check-black" className="container">
                  <input type="checkbox" checked={isColorChecked('Black')} onChange={handleColorCheckboxChange} id="check-black" name="Black" value="Black" />
                  <span className="checkmark" />
              Black
                </label>
                <label htmlFor="check-white" className="container">
                  <input type="checkbox" checked={isColorChecked('White')} onChange={handleColorCheckboxChange} id="check-white" name="White" value="White" />
                  <span className="checkmark" />
              White
                </label>
                <label htmlFor="check-blue" className="container">
                  <input type="checkbox" checked={isColorChecked('Blue')} onChange={handleColorCheckboxChange} id="check-blue" name="Blue" value="Blue" />
                  <span className="checkmark" />
              Blue
                </label>
                <label htmlFor="check-green" className="container">
                  <input type="checkbox" checked={isColorChecked('Green')} onChange={handleColorCheckboxChange} id="check-green" name="Green" value="Green" />
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
            <Dropdown.Toggle className="filter-dropdown" variant="info" id="dropdown-basic">
            Price
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="check-items">
                <label htmlFor="check-under-100" className="container">
                  <input type="checkbox" checked={isPriceChecked('lessthan100')} onChange={handlePriceCheckboxChange} id="check-under-100" value="lessthan100" />
                  <span className="checkmark" />
              Less than $100
                </label>
                <label htmlFor="check-100-to-200" className="container">
                  <input type="checkbox" checked={isPriceChecked('100to200')} onChange={handlePriceCheckboxChange} id="check-100-to-200" value="100to200" />
                  <span className="checkmark" />
              $100 to $200
                </label>
                <label htmlFor="check-150-or-more" className="container">
                  <input type="checkbox" checked={isPriceChecked('morethan200')} onChange={handlePriceCheckboxChange} id="check-150-or-more" value="morethan200" />
                  <span className="checkmark" />
              $200 or more
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

        {/* Close button for mobile filter  */}
        <div className="filter-wrapper-close-button">
          <button type="button" onClick={() => setFilterToggle(filter => !filter)}>
            <i className="fas fa-check" />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  filterArray: state.product.filter
});


const mapDispatchToProps = dispatch => ({
  setColorFilter: filter => dispatch(setColorFilterAction(filter)),
  unsetColorFilter: filter => dispatch(unsetColorFilterAction(filter)),
  setPriceFilter: filter => dispatch(setPriceFilterAction(filter)),
  unsetPriceFilter: filter => dispatch(unsetPriceFilterAction(filter))
});

ProductFilter.propTypes = {
  filterArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  setColorFilter: PropTypes.func.isRequired,
  unsetColorFilter: PropTypes.func.isRequired,
  setPriceFilter: PropTypes.func.isRequired,
  unsetPriceFilter: PropTypes.func.isRequired,

};


export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter);
