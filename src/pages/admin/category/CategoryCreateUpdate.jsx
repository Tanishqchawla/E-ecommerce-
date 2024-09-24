import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { storage } from '../../../firebase.config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryStart, updateCategoryStart } from '../../../redux/actions/category.action';
import { toast } from 'react-toastify';

let intialstate ={}

export default function CategoryCreateOrUpdate() {
  const categories = useSelector(state => state.category.categories);

  let {id} = useParams();

  if(id){
    let category = categories.find((category)=> category.id);

    if(category){
      intialstate= category;
    }
  }else{
    intialstate ={
      name:'',
      slug:'',
      image:'',
      status:''
    }
  }


 let[formData,setFormData]= useState(intialstate)

 let {name,slug,image,status} =formData;


 const dispatch = useDispatch();

const navigate = useNavigate()

 const inputChange = (event) => {
  setFormData((prevProps) => ({
    ...prevProps,
    [event.target.name]: event.target.value
  }))
}
const submit = (event) => {
  event.preventDefault()
try {
  if(id){
    dispatch(updateCategoryStart(formData,id));
    toast.success("Category  updated sucsessfuly")
  }else{

    dispatch(addCategoryStart(formData));
  toast.success("Category added successfully")
  }



  setTimeout(()=>{
    navigate('/admin/category')
  })
} catch (error) {
  toast.error(error.massage)
}

}

const uploadFile = (event) => {

  const storageRef = ref(storage, event.target.files[0].name);

  const uploadTask = uploadBytesResumable(storageRef, event.target.files[0]);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on('state_changed',
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
          default:
            break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setFormData((prevProps) => ({
          ...prevProps,
          image: downloadURL
        }));
      })
    }
  );
}

 

  return (
    <div className="card my-4">
      <div className='card-header'>
        <h3>Add Category
          <Link to="/admin/categories" className='btn btn-primary float-right'>Back</Link>
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
              placeholder="Category Name"
              name='name'
              value={name}
              onChange={inputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="slug" className="form-label">Slug</label>
            <input 
            type="text" 
            className="form-control"
             id="slug" 
             placeholder="Category Slug"
             name='slug'
             value={slug}
             onChange={inputChange}  />
          </div>
          
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input
             className="form-control"
              type="file" 
              id="image"
              name='image'
              onChange={uploadFile}  />
              <img src={image} style={{
              height: "50px"
            }} />
          </div>
         
          <div className="mb-3">
            <label htmlFor="status" className="form-label">Status</label>
            <select 
            className="form-control form-select-lg mb-3" 
            aria-label="Large select example"
            defaultValue={status}
            name='status'
            onChange={inputChange}>
              <option >Select Status</option>
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
