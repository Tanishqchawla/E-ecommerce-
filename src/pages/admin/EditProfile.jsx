
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateUserStart } from '../../redux/actions/users.action';

const intialstate = {
    name: '',
    email: '',
    password: '',
    uid: '',
    address: '',
    phone: ''
}

export default function EditProfile() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    let users = useSelector(state => state.user.users);

    let currentUserId = localStorage.getItem('currentUserId')

    const user = users.find(user => user.uid === currentUserId)



    if (!user) {
        navigate('/login');
    }
    let [formData, setFormData] = useState(user)

    let { name, email,password, address, phone } = formData;

    const inputChange = (event) => {
        setFormData((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }))
    }

    const submit = (event) => {
        event.preventDefault()
        let id = formData.id;

        dispatch(updateUserStart(formData,id))

        toast.success("Profile updated successfully")

        setTimeout(() => {
            navigate('/admin/profile')
        }, 2000)
   

    }

    return (
        <div className="card my-4">
            <div className='card-header'>
                <h3>Edit Profile
                    <Link to="/admin/profile" className='btn btn-primary float-right'>Back</Link>
                </h3>
            </div>
            <div className="card-body">
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name"
                            name='name'
                            value={name}
                            onChange={inputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            name='email'
                            value={email}
                            onChange={inputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">password</label>
                        <input
                            type="text"
                            className="form-control"
                            id="password"
                            placeholder="PAssword"
                            name='password'
                            value={password}
                            onChange={inputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">phone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="phone"
                            name='phone'
                            value={phone}
                            onChange={inputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Address"
                            name='address'
                            value={address}
                            onChange={inputChange} />
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}
