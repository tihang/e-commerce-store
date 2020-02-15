import React from 'react';
import BackgroundVideo from 'react-background-video-player';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      <div className="promo-video-wrapper">
        <BackgroundVideo
          containerWidth={100}
          containerHeight={100}
          src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/enUS/ASW_DAMExPUSHA_1920x1080_89_h264_1.mp4"
        />
        <div className="promo-video-overlay-content">
          <Link to="/login-register">
            <button className="promo-video-btn" type="button">
              <div className="btn-overlay" />
              <div className="btn-background-overlay" />
              <div className="btn-background-overlay2" />
              <div className="btn-content-wrapper">
                <p>Join now!</p>
                {'       '}
                <i className="fas fa-arrow-right" />
              </div>
            </button>
          </Link>
          <Link to="/collections">
            <button className="promo-video-btn" type="button">
              <div className="btn-overlay" />
              <div className="btn-background-overlay" />
              <div className="btn-background-overlay2" />
              <div className="btn-content-wrapper">
                <p>Explore</p>
                {'       '}
                <i className="fas fa-arrow-right" />
              </div>
            </button>
          </Link>
        </div>
      </div>

      {/* <div className="jumbotron-primary">
        <img
          src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
          alt="img"
        />
      </div>
      <div className="jumbotron-secondary">
        <img
          src="https://images.unsplash.com/photo-1537476102677-80bac0ab1d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80 1534w,"
          alt="img"
        />
      </div> */}
    </div>
  );
}
