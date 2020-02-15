import React from 'react';
import PropTypes from 'prop-types';

function ThemeButton({ displayText, onClick }) {
  return (
    <button onClick={onClick} type="button" className="theme-btn">
      <div className="btn-overlay" />
      <div className="btn-background-overlay" />
      <div className="btn-background-overlay2" />
      <div className="btn-content-wrapper">
        <p>{displayText}</p>
      </div>
    </button>
  );
}

ThemeButton.propTypes = {
  displayText: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

ThemeButton.defaultProps = {
  onClick: null
};

export default ThemeButton;
