import React from 'react'
import './Checkout.css'
import CheckOutCard from './CheckOutCard';
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer.js'

function Checkout() {
    
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className = "checkout" >
            <div className = "checkout__cards" >
                <h1>Shoping </h1>
                <div className = "checkout__title">
                    <p>Items</p>
                    <p>Price</p>
                </div>

                {basket.map ( item => (
                    <CheckOutCard
                        id = {item.id}
                        name = {item.name}
                        price = {item.price}
                        rating = {item.rating}
                        img = {item.img}
                    />

                ) )}
                
                <div className = "checkout__cards--subtotal" >
                    <h2>{`Subtotal ( ${basket.length} items) = ${getBasketTotal(basket)}$`}</h2>
                </div>
            </div>

            <div className = "checkout__subtotal" >
                <h3>{`Subtotal ( ${basket.length} items) = ${getBasketTotal(basket)}$`}</h3>
                <div className = "checkout__subtotal--gift">
                    <input type = "checkbox" />
                    <p>This order contains a gift</p>
                </div>
                <button>Proceed to checkout</button>
            </div>
        </div>
    )
}

export default Checkout
