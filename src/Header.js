import React from 'react';
import './Header.css'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom';
import { auth } from './firebase';

function Header() {

    
    const [{ basket, user }, dispatch] = useStateValue();

    const logout = () => {
        auth.signOut();
        dispatch({
            type: "SET_USER",
            user: null,
        })
    }

    return (
        <div className = "header" >
            <Link to = '/home' className = "header__logo" >
                <img
                    className = "header__logo--img"
                    src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt = ""
                />
            </Link>

            <div className = "header__location" >
                <LocationOnOutlinedIcon />
                <div className = "header__location--text" >
                    <span>Delivery</span>
                    <p>Bangladesh</p>
                </div>
            </div>

            <div className = "header__search" >
                <input />
                <SearchOutlinedIcon />
            </div>

            {!user? (
                    
                <Link to = './login' className = "header__option" >
                    <span>Hello, Friend</span>
                    <h3>Please Login</h3>
                </Link>
            ) : (
                <div onClick = {logout} className = "header__option" >
                    <span>Hello, {user.email}</span>
                    <h3>Account and Lists</h3>
                </div>
            )}

            <div className = "header__option" >
                <span>Returns</span>
                <h3>And orders</h3>
            </div>

            <Link to = '/checkout' className = "header__basket" >
                <ShoppingBasketOutlinedIcon />
                <p>{basket.length}</p>
            </Link>

        </div>
    )
}

export default Header
