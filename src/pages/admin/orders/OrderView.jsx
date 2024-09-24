import React from 'react'
import { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

export default function OrderView() {
    let { id } = useParams();

    const orders = useSelector(state => state.order.orders)
  
    const order = orders.find(ord => ord.id === id)
    console.log(order.billingAddress);
  
    useEffect(() => {
  
    }, [id])
  return (
    <div className="card">
      <div className='card-header'>
        <h3>Order ID - #{order.id}
        <Link to="/admin/orders" className='btn btn-primary float-right'>Back</Link>
        </h3>
      </div>
      <div className="card-body">
        <div className='row'>
          <div className="col-sm-12">
            <ul className="list-group">
              <li className="list-group-item active" aria-current="true">Order Summary</li>
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  Sub total
                </div>
                <div>
                  $ {order.cart.subTotal}
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  Tax
                </div>
                <div>
                  $ {order.cart.tax}
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  Grand total
                </div>
                <div>
                  $ {order.cart.grandTotal}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='row mt-4'>
          <div className="col-sm-12">
            <ul className="list-group">
              <li className="list-group-item active" aria-current="true">Billing address</li>
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  Name
                </div>
                <div>
                  {order.billingAddress.firstName + " " + order.billingAddress.lastName}
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  Email
                </div>
                <div>
                  {order.billingAddress.email}
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  Phone No.
                </div>
                <div>
                  {order.billingAddress.number}
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  Address
                </div>
                <div>
                  {
                    `${order.billingAddress.add1} ${order.billingAddress.add2} ${order.billingAddress.city} ${order.billingAddress.state} ${order.billingAddress.country} ${order.billingAddress.zip} `
                  }
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='row mt-4'>
          <div className="col-sm-12">
            <ul className="list-group">
              <li className="list-group-item active" aria-current="true">Products</li>
              <li className="list-group-item d-flex justify-content-between">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>S No</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      order.cart.items.length > 0 && order.cart.items.map((product, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <Link to={`/product-detail/${product.id}`} >
                              {product.name}
                            </Link>
                          </td>
                          <td><img src={product.image} style={{
                            height: "50px"
                          }} /></td>
                          <td>{product.price}</td>
                          <td>{product.quantity}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
