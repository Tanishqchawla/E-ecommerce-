import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <section className="banner-area">
    <div className="container">
      <div className="row fullscreen align-items-center justify-content-start" style={{
        height: "739px"
      }}>
        <div className="col-lg-12">
          <OwlCarousel items="1">
            <div className="row align-items-center d-flex">
              <div className="col-lg-5 col-md-6">
                <div className="banner-content">
                  <h1>Nike New <br />Collection!</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  <div className="add-bag d-flex align-items-center">
                    <Link><span className="lnr lnr-cross"></span></Link>
                    <span className="add-text text-uppercase">Add to Bag</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="banner-img">
                  <img className="img-fluid" src="assets/img/banner/banner-img.png" alt="" />
                </div>
              </div>
            </div>
            <div className="row single-slide align-items-center d-flex">
              <div className="col-lg-5 col-md-6">
                <div className="banner-content">
                  <h1>Nike New <br />Collection!</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  <div className="add-bag d-flex align-items-center">
                    <Link className="add-btn" ><span className="lnr lnr-cross"></span></Link>
                    <span className="add-text text-uppercase">Add to Bag</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="banner-img">
                  <img className="img-fluid" src="assets/img/banner/banner-img.png" alt="" />
                </div>
              </div>
            </div>
            <div className="row single-slide align-items-center d-flex">
              <div className="col-lg-5 col-md-6">
                <div className="banner-content">
                  <h1>Nike New <br />Collection!</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  <div className="add-bag d-flex align-items-center">
                    <Link className="add-btn" ><span className="lnr lnr-cross"></span></Link>
                    <span className="add-text text-uppercase">Add to Bag</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="banner-img">
                  <img className="img-fluid" src="assets/img/banner/banner-img.png" alt="" />
                </div>
              </div>
            </div>
            <div className="row single-slide align-items-center d-flex">
              <div className="col-lg-5 col-md-6">
                <div className="banner-content">
                  <h1>Nike New <br />Collection!</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  <div className="add-bag d-flex align-items-center">
                    <Link className="add-btn" ><span className="lnr lnr-cross"></span></Link>
                    <span className="add-text text-uppercase">Add to Bag</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="banner-img">
                  <img className="img-fluid" src="assets/img/banner/banner-img.png" alt="" />
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  </section>
  )
}
