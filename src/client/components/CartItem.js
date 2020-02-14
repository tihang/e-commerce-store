import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { toast } from 'react-toastify';
import { Modal, Button } from 'react-bootstrap';

function CartItem({ item, removeItem }) {
  // State for image modal
  const [isOpen, setIsOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState('');


  // State for remove from cart confirmation
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

            {/* Cart Item image */}
            <img className="cart-item-img" src={item.imgUrl} alt="Item img" />
          </div>

          {/* Cart Item image popup modal */}
          {isOpen && <Lightbox mainSrc={modalUrl} onCloseRequest={() => setIsOpen(false)} />}
          <div className="cart-item-description">
            <p className="cart-item-name">{item.name}</p>
            <p className="cart-item-color">{item.color}</p>
          </div>

          <div className="cart-item-controls">
            <p className="cart-item-count">{`QTY: ${item.count}`}</p>
            {/* Edit quantity button */}
            <button className="cart-item-edit" type="button">
              <i className="far fa-edit" />
            </button>
            <p className="cart-item-price">{`$${item.price}`}</p>
          </div>

          {/* Remove favorite and edit action buttons */}
          <div className="cart-item-actions">
            {/* Remove from cart button */}
            <button className="cart-item-remove" type="button" onClick={handleShow}>
              <i className="fas fa-times" />
            </button>
            {/* Modal to confirm remove from cart */}
            <Modal show={show} onHide={handleClose} centered style={{ fontFamily: 'monospace' }}>
              <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
              </Modal.Header>
              <Modal.Body>{`Remove ${item.name} from cart?`}</Modal.Body>
              <Modal.Footer>
                <Button
                  variant="danger"
                  onClick={() => {
                    removeItem(item);
                    toast.info('Removed');
                    handleClose();
                  }}
                >
                  Yes, remove
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Nevermind
                </Button>
              </Modal.Footer>
            </Modal>
            {/* Add to wishlist button */}
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
