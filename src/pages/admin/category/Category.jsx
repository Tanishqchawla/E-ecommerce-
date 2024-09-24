import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCategoryStart } from '../../../redux/actions/category.action';

export default function Categories() {
 const categories = useSelector(state => state.category.categories);

 const dispatch = useDispatch();
 useEffect(() =>{
  
},[categories.length])
  return (
    <div className="card my-4 ">
      <div className='card-header'>
        <h3>Categories
          <Link to="/admin/category/create" className='btn btn-primary float-right'>Add Category</Link>
        </h3>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
              categories.length >0 && categories.map((category,index) =>(
                <tr key={index}>
                 <td>{index+1}</td>
                 <td>{category.name}</td>
                 <td><img src={category.image} style={{
                  height:'50px'
                 }}/></td>
                 <td>
                  <Link to={`/admin/category/edit/${category.id}`} className='btn btn-warning mx-2'>edit</Link>
                  <button className='btn btn-danger'onClick={()=>dispatch(deleteCategoryStart(category.id))}>delete</button>
                 </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}
