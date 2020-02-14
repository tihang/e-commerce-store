/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { toast } from 'react-toastify';
import { addToCart } from '../redux';

function ProductCard({ product, addItem }) {
  // SHOW STATE FOR MODAL
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <div type="button" className="product-card-component" onClick={() => setShow(true)}>
        <div className="product-image-container">
          <div className="product-card-overlay" />
          <img alt="Product img" src={product.imgUrl} />
        </div>
        <div className="product-detail-container">
          <p className="product-detail-text">{product.name}</p>
          <p className="product-detail-price">{`$ ${product.price}`}</p>
        </div>
      </div>

      {/* Display Modal with product detail after user clicks */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <h1>{product.name}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="product-modal">
            <div className="product-modal-img">
              <Carousel>
                <Carousel.Item>
                  <img alt="Product img" src={product.imgUrl} />
                </Carousel.Item>
                <Carousel.Item>
                  <img alt="Product img" src={product.imgUrl} />
                </Carousel.Item>
                <Carousel.Item>
                  <img alt="Product img" src={product.imgUrl} />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="product-modal-body">
              <p className="product-modal-description">{product.description}</p>
              <div className="product-modal-btns">
                <button
                  className="product-modal-btn add"
                  type="button"
                  onClick={() => {
                    addItem(product);
                    setShow(false);
                    toast.success('Added to bag');
                  }}
                >
                  <div className="shopping-bag-btn">
                    <p className="btn-text">ADD TO BAG</p>
                    <div className="btn-icon">
                      <i className="fas fa-shopping-bag" />
                    </div>
                  </div>
                </button>
                <button
                  className="product-modal-btn remove"
                  type="button"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  Keep shopping
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  addItem: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addItem: product => dispatch(addToCart(product))
});

export default connect(null, mapDispatchToProps)(ProductCard);
