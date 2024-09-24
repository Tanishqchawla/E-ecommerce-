import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import Banner from '../component/Banner';
import Feature from '../component/Feature';
import Category from '../component/Category';
import Product from '../component/Product';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductStart } from '../redux/actions/product.action';

export default function Home() {
  let products = useSelector(state => state.product.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductStart())
  },[products.length])
  return (
    <>
      {/* <!-- start banner Area --> */}
<Banner/>
      {/* <!-- End banner Area --> */}

      {/* <!-- start features Area --> */}
     <Feature/>
      {/* <!-- end features Area --> */}

      {/* <!-- Start category Area --> */}
    
      {/* <!-- End category Area --> */}
<Category/>
      {/* <!-- start product Area --> */}
      <section className="active-product-area section_gap">
        <OwlCarousel items="1">
          {/* <!-- single product slide --> */}
          <div className="single-product-slider">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <div className="section-title">
                    <h1>Latest Products</h1>
                  </div>
                </div>
              </div>
              <div className="row">
              {
                  products.length > 0  && products.map((p,i) => (
                    <Product data={p} key={i} />
                  ))
                }
              </div>
            </div>
          </div>
        </OwlCarousel>

      </section>
      {/* <!-- end product Area --> */}
    </>
  )
}
