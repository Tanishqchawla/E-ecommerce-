import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getUserStart } from '../redux/actions/users.action';
import { placeOrderStart } from '../redux/actions/order.action';
import { toast } from 'react-toastify';


let initialState = {
  firstName: '',
  lastName: '',
  number: '',
  email: '',
  country: '',
  add1: '',
  add2: '',
  city: '',
  state: '',
  zip: '',
}
export default function Checkout() {


  const carts = useSelector(state => state.cart.carts);
  let users = useSelector(state => state.user.users);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [formData, setFormData] = useState(initialState);

  let {
    firstName, lastName, number, email, country, add1, add2, city, state, zip
  } = formData;

  useEffect(()=>{
    dispatch(getUserStart());
  },[carts.items.length])

  const inputChange = (event) => {
    setFormData((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }))
  }

  const submit = () => {
    let currentUserId = localStorage.getItem('currentUserId')

    carts.customer = users.find(user => user.uid === currentUserId)

    let checkOutObject = {
      billingAddress:formData,
      cart: carts
    }

    dispatch(placeOrderStart(checkOutObject))

    setTimeout(() => {
      toast.success("your order has been placed")
      navigate('/Thankyou')
    }, 1000)

  } 
  return (
    <>
    <section className="banner-area organic-breadcrumb">
      <div className="container">
        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
          <div className="col-first">
            <h1>Checkout</h1>
            <nav className="d-flex align-items-center">
              <Link to="/">Home
                <span className="lnr lnr-arrow-right"></span>
              </Link>
              <Link>Checkout</Link>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <section className="checkout_area section_gap">
      <div className="container">
        <div className="billing_details">
          <div className="row">
            <div className="col-lg-8">
              <h3>Billing Details</h3>
              <form className="row contact_form" onSubmit={() => {}}>
                <div className="col-md-6 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="first"
                    name="firstName"
                    value={firstName}
                    onChange={inputChange} />
                  <span className="placeholder" data-placeholder="First name"></span>
                </div>
                <div className="col-md-6 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="last"
                    name="lastName" 
                    value={lastName}
                    onChange={inputChange}/>
                  <span className="placeholder" data-placeholder="Last name"></span>
                </div>
                <div className="col-md-6 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    name="number"
                    value={number}
                    onChange={inputChange} />
                  <span className="placeholder" data-placeholder="Phone number"></span>
                </div>
                <div className="col-md-6 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email" 
                    value={email}
                    onChange={inputChange}/>
                  <span className="placeholder" data-placeholder="Email Address"></span>
                </div>
                <div className="col-md-12 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    name="country" 
                    value={country}
                    onChange={inputChange}/>
                  <span className="placeholder" data-placeholder="Country"></span>

                </div>
                <div className="col-md-12 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="add1"
                    name="add1"
                    value={add1}
                    onChange={inputChange} />
                  <span className="placeholder" data-placeholder="Address line 01"></span>
                </div>
                <div className="col-md-12 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="add2"
                    name="add2"
                    value={add2}
                    onChange={inputChange} />
                  <span className="placeholder" data-placeholder="Address line 02"></span>
                </div>
                <div className="col-md-12 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    value={city}
                    onChange={inputChange} />
                  <span className="placeholder" data-placeholder="Town/City"></span>
                </div>
                <div className="col-md-12 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    name="state"
                    value={state}
                    onChange={inputChange} />
                  <span className="placeholder" data-placeholder="State"></span>
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    name="zip"
                    value={zip}
                    onChange={inputChange} />
                    <span className="placeholder" data-placeholder="Pincode"></span>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="order_box">
                <h2>Your Order</h2>
                <ul className="list">
                  <li>
                    <Link >Product <span>Total</span></Link>
                  </li>

                  {
                   carts.items.length > 0 && carts.items.map((product, i) => (
                    <li key={i}>
                      <Link to={`/product-details/${product.id}`}>
                        {product.name}
                        <span className="middle">x {product.quantity}</span>
                        <span className="last">${(product.price - ((product.discount / 100) * product.price)) * product.quantity}</span>
                      </Link>
                    </li>
                  ))
                  }
                </ul>
                <ul className="list list_2">
                  <li><a href="#">Subtotal <span>${carts.subTotal}</span></a></li>
                  <li><a href="#">Shipping <span>$0</span></a></li>
                  <li><a href="#">Total <span>${carts.grandTotal}</span></a></li>
                </ul>
                <button className="primary-btn w-100" onClick={submit}>Place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </>
  )
}
