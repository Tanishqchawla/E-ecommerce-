import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

let currentUserId = localStorage.getItem('currentUserId')


export default function Auth() {
  let[ crrUserID, setCrrUserID]=useState(currentUserId)

const navigate = useNavigate();


useEffect(() => {
  setTimeout(() => {
    let currentUserId = localStorage.getItem('currentUserId')

    if(! currentUserId) {
      navigate('/login');
    }else {
      setCrrUserID (currentUserId);
    }
  })
  
}, [crrUserID])

  return (
    <div className='container 'style={{
      marginTop: "100px",
      marginBottom: "100px",
    }}>
      <div className='row'>
        <div className='col-sm-3 '>
          <ul className="list-group">
            <li className="list-group-item active ">Sidebar</li>
            <li className="list-group-item">
              <Link to="/admin/profile">Profile</Link>
            </li>
            <li className="list-group-item">
              <Link to="/admin/products">Products</Link>
            </li>
            <li className="list-group-item">
              <Link to="/admin/category">Category</Link>
            </li>
            <li className="list-group-item">
              <Link to="/admin/orders">Order</Link>
            </li>
            <li className="list-group-item">
              <Link to="/admin/users">Users</Link>
            </li>
          </ul>
        </div>
        <div className='col-sm-9'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
