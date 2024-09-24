import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addUserStart, updateUserStart } from "../../../redux/actions/users.action";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { auth } from "../../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";


let intialState = {};

export default function UserCreateUpdate() {
  const users = useSelector(state => state.user.users);

  let { id } = useParams();

  if (id) {
    let user = users.find((user) => user.id === id);

    if (user) {
      intialState = user;
    }
  } else {
    intialState = {
      name: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      status: '',
      role: ''
    }
  }

  let [formData, setFormData] = useState(intialState)


  let { name, email, phone, address, password ,status, role } = formData;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const inputChange = (event) => {
    setFormData((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }))
  }

  const submit = (event) => {
    event.preventDefault()

    try {
      if(id) {
        dispatch(updateUserStart(formData, id));
        toast.success("User updated successfully");
      }else {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                formData.uid = user.uid;

                dispatch(addUserStart(formData))
                toast.success("User added successfully");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error('Something went wrong')
            });

      }
    
      setTimeout(() => {
        navigate('/admin/users')
      }, 2000)
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {

  }, [id])

  return (
    <div className="card">
      <div className='card-header'>
        <h3>Add User
          <Link to="/admin/users" className='btn btn-primary float-right'>Back</Link>
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
              placeholder="User Name"
              name='name'
              value={name}
              onChange={inputChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
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
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              name='password'
              value={password}
              onChange={inputChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">phone</label>
            <input
              type="phone"
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
              type="address"
              className="form-control"
              id="address"
              placeholder="address"
              name='address'
              value={address}
              onChange={inputChange} />
          </div>
          
          <div className="mb-3">
            <label htmlFor="role" className="form-label">role</label>
            <select
              className="form-control form-select-lg mb-3"
              name='role'
              defaultValue={role}
              onChange={inputChange}>
              <option>Select role</option>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="status" className="form-label">Status</label>
            <select
              className="form-control form-select-lg mb-3"
              name='status'
              defaultValue={status}
              onChange={inputChange}>
              <option>Select Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>

          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
  )
}
