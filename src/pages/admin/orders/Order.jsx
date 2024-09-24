import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrderStart } from '../../../redux/actions/order.action';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Order() {
    const dispatch = useDispatch();

    const orders = useSelector(state => state.order.orders)
    
    useEffect(() => {
      dispatch(getOrderStart())
    }, [orders.length])

  return (
    <div class="card">
    <div className='card-header'>
      <h3>Orders</h3>
    </div>
    <div class="card-body">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>S No</th>
            <th>Sub Total</th>
            <th>Tax </th>
            <th>Grand Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.length > 0 && orders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>${order.cart.subTotal}</td>

                <td>${order.cart.tax}</td>
                <td>${order.cart.grandTotal}</td>
                <td>
                  <Link to={`/admin/order/view/${order.id}`} className='btn btn-primary'>View</Link>
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
