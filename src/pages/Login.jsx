import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';

let initialState = {
    email: '',
    password: ''
}
export default function Login() {
	const [formData, setFormData] = useState(initialState);

    let { email, password } = formData;

    const navigate = useNavigate();

    const inputChange = (event) => {
        setFormData((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }))
    }

	const submit =(event)=>{
		event.preventDefault();

signInWithEmailAndPassword(auth, formData.email,formData.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
	console.log(user);

	localStorage.setItem('currentUserId',user.uid)

	toast.success('User sign in successfully')
	navigate("/admin/profile")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
	}
  return (
   <>
 
	<section className="banner-area organic-breadcrumb">
		<div className="container">
			<div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
				<div className="col-first">
					<h1>Login</h1>
					<nav className="d-flex align-items-center">
						<Link to="/">Home<span className="lnr lnr-arrow-right"></span></Link>
						<Link >Login</Link>
					</nav>
				</div>
			</div>
		</div>
	</section>
	
	<section className="login_box_area section_gap">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="login_box_img">
						<img className="img-fluid" src="/assets/img/login.jpg" alt=""/>
						<div className="hover">
							<h4>New to our website?</h4>
							<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
							<Link className="primary-btn" to="/register">Create an Account</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="login_form_inner">
						<h3>Log in to enter</h3>
						<form className="row login_form" onSubmit={submit}  id="contactForm">
                                    <div className="col-md-12 form-group">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="email" 
                                            name="email" 
                                            placeholder="Email" 
                                            value={email}
                                            onChange={inputChange} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            id="password" 
                                            name="password" 
                                            placeholder="Password" 
                                            value={password}
                                            onChange={inputChange} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <button type="submit" value="submit" className="primary-btn">Log In</button>
                                    </div>
                                </form>
					</div>
				</div>
			</div>
		</div>
	</section>

   </>
  )
}
