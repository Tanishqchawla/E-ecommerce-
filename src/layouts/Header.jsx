import React from 'react'
import { useEffect } from 'react';
import $ from "jquery"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  let[ crrUserID, setCrrUserID]=useState('')
  const carts = useSelector(state => state.cart.carts);

  

  const headerFunction = () => {

    // Search Toggle
    $("#search_input_box").hide();
    $("#search_input_box").hide();

    $("#search").on("click", function () {
      $("#search_input_box").slideToggle();
      $("#search_input").focus();
    });
    $("#close_search").on("click", function () {
      $('#search_input_box').slideUp(500);
    });
  }
const logout =()=>{
   localStorage.removeItem('currentUserId');
}

  useEffect(() => {
    headerFunction()
    setTimeout(() => {
      let currentUserId = localStorage.getItem('currentUserId')

      if (currentUserId) {
        setCrrUserID(currentUserId);
      }
    })
  }, [crrUserID])

  return (
    <>
    {/* <!-- Start Header Area --> */}
    <header className="header_area sticky-header">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light main_box">
          <div className="container">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <Link className="navbar-brand logo_h" to="/">
              <img src="/assets/img/logo.png" alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>

                {
                  crrUserID == '' ? <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>
                  </> :
                    <>
                      <li className="nav-item submenu dropdown">
                        <Link href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                          aria-expanded="false">Account</Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link className="nav-link" to="/admin/profile">Profile</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/admin/orders">Orders</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/admin/products">Products</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/admin/category">Category</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/admin/users">Users</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" onClick={logout}>Logout</Link>
                          </li>
                        </ul>
                      </li>
                    </>
                }
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                  <Link to="/cart" className="cart">
                  <span className="ti-bag">
                        {
                          carts.items.length > 0 && 
                            <sup className="badge bg-danger text-white">{carts.items.length}</sup>
                        }
                      </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="search_input" id="search_input_box">
        <div className="container">
          <form className="d-flex justify-content-between">
            <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
            <button type="submit" className="btn"></button>
            <span className="lnr lnr-cross" id="close_search" title="Close Search"></span>
          </form>
        </div>
      </div>
    </header>

    {/* <!-- End Header Area --> */}

  </>
  )
}
