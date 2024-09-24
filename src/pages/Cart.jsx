import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartStart } from '../redux/actions/cart.action';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../component/CartItem';

export default function Cart() {
  const carts = useSelector(state => state.cart.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartStart())
  },[carts.subTotal])

  return (
    <>
      {/* <!-- Start Banner Area --> */}
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Shopping Cart</h1>
              <nav className="d-flex align-items-center">
                <a href="index.html">Home<span className="lnr lnr-arrow-right"></span></a>
                <a href="category.html">Cart</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Area -->

    <!--================Cart Area =================--> */}
      <section className="cart_area">
        <div className="container">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    carts.items.length > 0 && carts.items.map((item, index) => (
                      <CartItem item={item} key={index} />
                    ))
                  }

                  <tr className="bottom_button">
                    <td>
                      
                    </td>
                    <td>
                      <h5>Subtotal</h5>
                    </td>
                    <td>
                      <h5>${carts.subTotal}</h5>
                    </td>

                  </tr>
                 
                  <tr className="out_button_area">
                    <td>

                    </td>
                    <td>

                    </td>
                    <td>

                    </td>
                    <td>
                      <div className="checkout_btn_inner d-flex align-items-center">
                        <Link className="gray_btn" to="/">Continue Shopping</Link>
                        <Link className="primary-btn" to="/checkout">Proceed to checkout</Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================End Cart Area =================--> */}
    </>
  )
}
