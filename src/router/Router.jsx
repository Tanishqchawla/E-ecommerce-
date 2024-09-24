import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Shop from '../pages/Shop'
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Auth from '../pages/admin/Auth'
import Profile from '../pages/admin/Profile'
import Category from '../pages/admin/category/Category'
import CategoryCreateUpdate from '../pages/admin/category/CategoryCreateUpdate'
import Products from '../pages/admin/products/Products'
import ProductCreateUpdate from '../pages/admin/products/ProductCreateUpdate'
import User from '../pages/admin/users/User'
import UserCreateUpdate from '../pages/admin/users/UserCreateUpdate'
import Login from '../pages/Login'
import Register from '../pages/Register'
import EditProfile from '../pages/admin/EditProfile'
import Thanku from '../pages/Thanku'
import Order from '../pages/admin/orders/Order'
import OrderView from '../pages/admin/orders/OrderView'

export default function Router() {
    return (
        <Routes>
            {/* home page */}
            <Route path='/' element={<Home />} />
            {/* about page */}
            <Route path='/about' element={<About />} />
            {/* shop page */}
            <Route path='/shop' element={<Shop />} />
            {/* product detail page */}
            <Route path='/product-detail/:id' element={<ProductDetail />} />
            {/* cart page */}
            <Route path='/cart' element={<Cart />} />
            {/* checkout page */}
            <Route path='/checkout' element={<Checkout />} />
            {/* login page */}
            <Route path='/login' element={<Login />} />
            {/* register page */}
            <Route path='/register' element={<Register />} />
 {/* thankyou page */}
 <Route path='/Thankyou' element={<Thanku />} />
            {/* admin routes */}
            <Route path='/admin' element={<Auth />}>
                {/* profile page */}
                <Route path='profile' element={<Profile />} />
                <Route path='profile/edit' element={<EditProfile />} />
                {/* Order page */}
                 <Route path='orders'element={<Order/>}/>
                 <Route path='order/view/:id'element={<OrderView/>}/>
                {/* category oradd update pages */}
                <Route path='category' element={<Category />} />
                <Route path='category/create' element={<CategoryCreateUpdate />} />
                <Route path='category/edit/:id' element={<CategoryCreateUpdate />} />
                {/* products or create update pages */}
                <Route path='products' element={<Products />} />
                <Route path='products/create' element={<ProductCreateUpdate />} />
                <Route path='products/edit/:id' element={<ProductCreateUpdate />} />
                {/* user orcreate update page */}
                <Route path='users' element={<User />} />
                <Route path='users/create' element={<UserCreateUpdate />} />
                <Route path='users/edit/:id' element={<UserCreateUpdate />} />

            </Route>
        </Routes>
    )
}
