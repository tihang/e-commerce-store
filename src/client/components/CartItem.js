import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useAlert } from 'react-alert';


function CartItem({ item, removeItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState('');
  const alert = useAlert();

  return (
    <React.Fragment>
      <div key={item.id} className="cart-item-component">
        <div className="cart-item-container">
          <div className="cart-item-img-container">
            <div className="cart-item-img-overlay">
              <button
                className="cart-item-modal-button"
                onClick={() => {
                  setModalUrl(item.imgUrl);
                  setIsOpen(true);
                }}
                type="button"
              >
                <i className="fas fa-search-plus" />
              </button>
            </div>
            <img className="cart-item-img" src={item.imgUrl} alt="Item img" />
          </div>

          {isOpen && <Lightbox mainSrc={modalUrl} onCloseRequest={() => setIsOpen(false)} />}
          <div className="cart-item-description">
            <p className="cart-item-name">{item.name}</p>
            <p className="cart-item-color">{item.color}</p>
          </div>

          <div className="cart-item-controls">
            <p className="cart-item-price">{`$${item.price}`}</p>
          </div>

          <div className="cart-item-actions">
            <button
              className="cart-item-remove"
              type="button"
              onClick={() => {
                removeItem(item);
                alert.success('Removed item');
              }}
            >
              <i className="fas fa-times" />
            </button>
            <button className="cart-item-wishlist" type="button">
              <i className="fas fa-heart" />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

CartItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  removeItem: PropTypes.func.isRequired
};

export default CartItem;
