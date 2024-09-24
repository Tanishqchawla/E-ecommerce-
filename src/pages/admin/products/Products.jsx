import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProductStart, getProductStart } from '../../../redux/actions/product.action';

export default function Products() {
 const dispatch =useDispatch();

const products = useSelector(state => state.product.products)

  useEffect(()=>{
     dispatch(getProductStart())
  },[products.length])
  return (
    <div className="card my-4">
      <div className='card-header'>
        <h3>Products
          <Link to="/admin/products/create" className='btn btn-primary float-right'>Add Product</Link>
        </h3>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>s.no</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              products.length >0 && products.map((product,index) =>(
                <tr key={index}>
                 <td>{index+1}</td>
                 <td>{product.name}</td>
                 <td><img src={product.image} style={{
                  height:'50px'
                 }}/></td>
                 <td>{product.price}</td>
                 <td>{product.quantity}</td>
                 <td>
                  <Link to={`/admin/products/edit/${product.id}`} className='btn btn-warning mx-2'>edit</Link>
                  <button className='btn btn-danger'onClick={()=>dispatch(deleteProductStart(product.id))}>delete</button>
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
