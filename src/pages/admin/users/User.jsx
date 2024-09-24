import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserStart, getUserStart } from "../../../redux/actions/users.action";
import { Link } from "react-router-dom";


export default function User() {
  const dispatch = useDispatch();

  const users = useSelector(state => state.user.users)

  useEffect(() => {
    dispatch(getUserStart())
  }, [users.length])
  return (
    <div class="card">
      <div className='card-header'>
        <h3>User
          <Link to="/admin/users/create" className='btn btn-primary float-right'>Add User</Link>
        </h3>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>S No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.length > 0 && users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>

                  <td>
                    <Link to={`/admin/users/edit/${user.id}`} className='btn btn-warning mx-2'>Edit</Link>
                    <button className='btn btn-danger' onClick={() => dispatch(deleteUserStart(user.id))}>Delete</button>
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
