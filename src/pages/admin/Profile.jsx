import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { getUserStart } from '../../redux/actions/users.action';
import { useEffect } from 'react';

export default function Profile() {
  let users = useSelector(state => state.user.users);
  let currentUser = useSelector(state => state.user.currentUser);

  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserStart())

    const currentUserId = localStorage.getItem('currentUserId');
    const user = users.find(user => user.uid === currentUserId);

    if (!user) {
      navigate('/login');
    }
  }, [users.length, navigate]);

  if (!users) {
    return null; // handle the case where user is undefined, for example: render a loading spinner
  }
  return (
    <div className="card">
      <div className='card-header d-flex justify-content-between'>
        <h3>Profile</h3>
        <Link className='btn btn-primary' to={'/admin/profile/edit'}> Edit Profile</Link>
      </div>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">Name:{users.name}</li>
          <li className="list-group-item">Email:{users.email}</li>
          <li className="list-group-item">Contact:{users.phone}</li>
          <li className="list-group-item">Address:{users.address}</li>
        </ul>
      </div>
    </div>
  )
}

