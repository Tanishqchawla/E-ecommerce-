import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/* <!-- Start Banner Area --> */}
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>About Us</h1>
              <nav className="d-flex align-items-center">
                <Link to="/">Home<span className="lnr lnr-arrow-right"></span></Link>
                <Link to="/about">About</Link>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Area --> */}

      {/* <!--================Contact Area =================--> */}
      <section className="contact_area section_gap_bottom">
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-3">
              <div className="contact_info">
                <div className="info_item">
                  <i className="lnr lnr-home"></i>
                  <h6>California, United States</h6>
                  <p>Santa monica bullevard</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-phone-handset"></i>
                  <h6><a href="#">00 (440) 9865 562</a></h6>
                  <p>Mon to Fri 9am to 6 pm</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-envelope"></i>
                  <h6><a href="#">support@colorlib.com</a></h6>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'"></textarea>
                  </div>
                </div>
                <div className="col-md-12 text-right">
                  <button type="submit" value="submit" className="primary-btn">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
