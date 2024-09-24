import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProductStart } from '../redux/actions/product.action';
import { addCartStart } from '../redux/actions/cart.action';
import { addCart } from '../helpers/cartHelper';
import { toast } from 'react-toastify';

export default function ProductDetail() {
  let products = useSelector(state => state.product.products);
  const carts = useSelector(state => state.cart.carts);

  

  let { id }  = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const product = products.find(p  => p.id === id);


  if(! product) {
    navigate('/')
  }
  const cartProduct = carts.items.find(item => item.id === product.id);

  let [quantity, setQuantity] = useState(+(product.quantity));
  

  const inputChange = (event) => {
    setQuantity(+(event.target.value))

    let result = addCart(carts, product, true, +(event.target.value))

    dispatch(addCartStart(result))
}

const increment = () => {
    setQuantity(quantity + 1)

}

const decrement = () => {
    setQuantity(quantity - 1)

    
}
const addToCart = () => {
  let result = addCart(carts, cartProduct, true, quantity)

  dispatch(addCartStart(result))

  toast.success("Product added to cart");
}

  useEffect(() => {
    dispatch(getProductStart())
  },[])

  return (
    <>
      {/* <!-- Start Banner Area --> */}
      <section class="banner-area organic-breadcrumb">
        <div class="container">
          <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div class="col-first">
              <h1>Product Details Page</h1>
              <nav class="d-flex align-items-center">
                <Link to="/">Home<span class="lnr lnr-arrow-right"></span></Link>
                <Link to="/shop">Shop<span class="lnr lnr-arrow-right"></span></Link>
                <Link>{product.name}</Link>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Area --> */}

      {/* <!--================Single Product Area =================--> */}
      <div class="product_image_area">
        <div class="container">
          <div class="row s_product_inner">
            <div class="col-lg-6">
              <div class="s_Product_carousel">
                <div class="single-prd-item">
                  <img class="img-fluid" src={product.image} alt={product.name} />
                </div>
              </div>
            </div>
            <div class="col-lg-5 offset-lg-1">
              <div class="s_product_text">
                <h3>{product.name}</h3>
                <h2>${product.price - ((product.discount / 100 ) * product.price)}</h2>
                <ul class="list">
                  <li><a class="active" href="#"><span>Category</span> : {product.category}</a></li>
                  <li><a href="#"><span>Availibility</span> : In Stock</a></li>
                </ul>
                <p dangerouslySetInnerHTML={{ __html: product.shortDescription }}></p>
                <div class="product_count">
                  <label for="qty">Quantity:</label>
                  <input 
                    type="text" 
                    name="qty" 
                    id="sst" 
                    maxLength="12" 
                    value={quantity} 
                    title="Quantity:" 
                    class="input-text qty"
                    onChange={inputChange} />
                  <button class="increase items-count" type="button" onClick={increment}>
                    <i class="lnr lnr-chevron-up"></i>
                  </button>

                  <button class="reduced items-count" type="button" onClick={decrement}>
                    <i class="lnr lnr-chevron-down"></i>
                  </button>
                </div>
                <div class="card_area d-flex align-items-center">
                  <Link class="primary-btn" onClick={addToCart}>Add to Cart</Link>
                </div>              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--================End Single Product Area =================--> */}

      {/* <!--================Product Description Area =================--> */}
      <section class="product_description_area">
        <div class="container">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active show" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div 
              class="tab-pane fade active show" 
              id="home" 
              role="tabpanel" 
              aria-labelledby="home-tab"
              dangerouslySetInnerHTML={{ __html: product.description }}>
              
            </div>
          </div>
        </div>
      </section >
      {/* <!--================End Product Description Area =================--> */}
    </>
  )
}
