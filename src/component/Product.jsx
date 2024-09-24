
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addCart } from '../helpers/cartHelper';
import { addCartStart, getCartStart } from '../redux/actions/cart.action';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Product({ data }) {
  let currentUserId = localStorage.getItem('currentUserId')
  
  const navigate = useNavigate();
    const dispatch =useDispatch();
  const carts = useSelector(state => state.cart.carts);

      const discountedPrice = () => { 
      let dPrice =  (data.discount / 100 ) * data.price;

      return data.price - dPrice;
   }

    const addToCart= ()=>{
    
      if (! currentUserId) {

        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }else{
        let result = addCart(carts, data);

            dispatch(addCartStart(result))
            
            toast.success("product add to cart")
      }
    }
     useEffect(()=>{
         dispatch(getCartStart())
     },[])

  return (
    <div className="col-lg-3 col-md-6">
    <div className="single-product">
      <img className="img-fluid" src={data.image} alt={data.name} />
      <div className="product-details">
        <h6>{data.name}</h6>
        <div className="price">
          <h6>${discountedPrice()}</h6>
          <h6 className="l-through">${data.price}</h6>
        </div>
        <div className="prd-bottom">

          <Link className="social-info">
            <span className="ti-bag"></span>
            <p className="hover-text" onClick={addToCart}>add to bag</p>
          </Link>
          
          <Link to={`/product-detail/${data.id}`} className="social-info">
            <span className="lnr lnr-move"></span>
            <p className="hover-text">view more</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
