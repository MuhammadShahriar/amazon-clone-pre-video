
import { useStateValue } from './StateProvider'
import Rating from '@material-ui/lab/Rating';
import React, { useState } from 'react'
import './Product.css'

function Product({id, name, price, rating, img}) {

    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                id : id,
                name : name,
                img : img,
                price : price,
                rating : rating
            }
        });
    }

    return (
        <div className = "product">
            <h2>{name}</h2>
            <img
                src = {img}
                alt = ""
            />
            <div className = "product__details" >
                <p>{`Price : ${price} $`}</p>
                <Rating className = "product__rating" name="read-only" value={rating} readOnly />
                <button onClick = {addToBasket} >Add to card</button>
            </div>
        </div>
    )
}

export default Product
