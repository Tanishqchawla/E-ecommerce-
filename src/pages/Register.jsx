import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { auth } from '../firebase.config';
import { useDispatch } from 'react-redux';
import { addUserStart } from '../redux/actions/users.action';
import { toast } from 'react-toastify';
let initialstate ={
    name :'',
    email:'',
    password:''
}
export default function Register() {
 const [formData,setFormData]= useState(initialstate)

let{name, email, password} =formData;

const dispatch = useDispatch();
const navigate = useNavigate();

const inputChange = (event) => {
    setFormData((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }))
  }
 const submit = (event)=>{
     event.preventDefault();
createUserWithEmailAndPassword(auth, formData.email, formData.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;


    formData.uid =user.uid;

    dispatch(addUserStart(formData))

    setTimeout(()=>{
        toast.success("User register successfully")

        navigate('/login')
    }, 2000)

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  return (
   <>
 
	<section className="banner-area organic-breadcrumb">
		<div className="container">
			<div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
				<div className="col-first">
					<h1>Register</h1>
					<nav className="d-flex align-items-center">
						<Link to="/">Home<span className="lnr lnr-arrow-right"></span></Link>
						<Link >Register</Link>
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
							<Link className="primary-btn" to="/login">Already have an Account</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="login_form_inner">
						<h3>Register</h3>
                        <form className="row login_form" id="contactForm" onSubmit={submit}>
                                    <div className="col-md-12 form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="name" 
                                            name="name" 
                                            placeholder="Name" 
                                            value={name}
                                            onChange={inputChange} />
                                    </div>
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
                                        <button type="submit" value="submit" className="primary-btn">Register</button>
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
