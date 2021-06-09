import Rating from '@material-ui/lab/Rating'
import React from 'react'
import './CheckOutCard.css'
import { useStateValue } from './StateProvider'

function CheckOutCard({id, img, name, rating, price}) {
    
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch ( {
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className = "checkoutcard" >
            <img
                src = {img} 
                alt = ""
            />
            <div className = "checkoutcard__details" >
                <h3>{name}</h3>
                <div className = "checkoutcard__data">
                    <p>{`Price : ${price}$`}</p>
                    <Rating 
                        className = "checoutcard__rating" 
                        name="read-only" 
                        value={rating} 
                        readOnly
                    />
                </div>
                <button onClick ={removeFromBasket} >Remove From Card</button>
            </div>
            <h3>{price}$</h3> 
        </div>
    )
}

export default CheckOutCard
