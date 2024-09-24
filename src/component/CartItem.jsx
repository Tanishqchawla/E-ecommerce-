import React from 'react'
import { useState } from 'react'
import { addCart } from '../helpers/cartHelper';
import { useDispatch, useSelector } from 'react-redux';
import { addCartStart } from '../redux/actions/cart.action';

export default function CartItem({ item }) {

    const carts = useSelector(state => state.cart.carts);

    const dispatch = useDispatch()

    let [quantity, setQuantity] = useState(+(item.quantity));

    const inputChange = (event) => {
        setQuantity(+(event.target.value))

        let result = addCart(carts, item, true, +(event.target.value))

        dispatch(addCartStart(result))
    }

    const increment = () => {
        setQuantity(quantity + 1)

        let result = addCart(carts, item, true, quantity + 1)

        dispatch(addCartStart(result))
    }

    const decrement = () => {
        setQuantity(quantity - 1)

        let result = addCart(carts, item, true, quantity - 1)

        dispatch(addCartStart(result))
    }
    return (
        <tr>
            <td>
                <div className="media">
                    <div className="d-flex">
                        <img src={item.image} alt="" style={{
                            height: "100px"
                        }} />
                    </div>
                    <div className="media-body">
                        <p>{item.name}</p>
                    </div>
                </div>
            </td>
            <td>
                <h5>${item.price - ((item.discount / 100) * item.price)}</h5>
            </td>
            <td>
                <div className="product_count">
                    <input 
                        type="text" 
                        name="qty" 
                        id="sst" 
                        maxLength="12" 
                        value={quantity} 
                        title="Quantity:"
                        className="input-text qty"
                        onChange={inputChange} 
                        />
                    
                    <button 
                        className="increase items-count" 
                        type="button" onClick={increment}>
                            <i className="lnr lnr-chevron-up"></i>
                    </button>
                    <button 
                        className="reduced items-count" 
                        type="button" onClick={decrement}>
                            <i className="lnr lnr-chevron-down"></i>
                    </button>
                </div>
            </td>
            <td>
                <h5>${(item.price - ((item.discount / 100) * item.price)) * item.quantity}</h5>
            </td>
        </tr>
    )
}
