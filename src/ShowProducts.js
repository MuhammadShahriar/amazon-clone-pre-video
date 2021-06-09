import React from 'react'
import Product from './Product'
import './ShowProducts.css'


function ShowProducts() {
    return (
        <div className = "showproducts" >
            <h1> All Products</h1>
            <div className = "showproducts__list" >
                <Product
                    id = {1}
                    img = "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY327_FMwebp_QL65_.jpg"
                    price = {40}
                    name = "BENGOO G9000 Stereo Gaming Headset"
                    rating = {5}
                 />

                 <Product
                    id = {2}
                    img = "https://m.media-amazon.com/images/I/61lnzTv2a0L._AC_UY327_FMwebp_QL65_.jpg"
                    price = {39}
                    name = "RUNMUS Gaming Headset Xbox One Headsett"
                    rating = {4}
                 />

                 <Product
                    id = {3}
                    img = "https://m.media-amazon.com/images/I/61QIMDB3YTL._AC_UY327_FMwebp_QL65_.jpg"
                    price = {50}
                    name = "Razer Kraken X Ultralight Gaming Headset"
                    rating = {2}
                 />
                 

                 <Product
                    id = {4}
                    img = "https://m.media-amazon.com/images/I/61lmgrpck3L._AC_UL480_FMwebp_QL65_.jpg"
                    price = {29}
                    name = "EPOS I Sennheiser GAME ONE Gaming Headset,"
                    rating = {5}
                 />
                 

                 <Product
                    id = {5}
                    img = "https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg"
                    price = {93}
                    name = "Acer SB220Q bi 21.5 Inches Full HD"
                    rating = {5}
                 />
                 

                 <Product
                    id = {6}
                    img = "https://images-na.ssl-images-amazon.com/images/I/41B54aFFMOL.jpg"
                    price = {20}
                    name = "Logitech MK270 Wireless Keyboard"
                    rating = {5}
                 />
                 

                 <Product
                    id = {7}
                    img = "https://images-na.ssl-images-amazon.com/images/I/51IIMW6-TbL.jpg"
                    price = {40}
                    name = "HP 24mh FHD Monitor"
                    rating = {5}
                 />
                 

                 <Product
                    id = {8}
                    img = "https://m.media-amazon.com/images/I/61pEZoqGzPL._AC_UL480_FMwebp_QL65_.jpg"
                    price = {48}
                    name = "BestOffice PC Gaming Chair"
                    rating = {5}
                 />
                 

                 <Product
                    id = {9}
                    img = "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY327_FMwebp_QL65_.jpg"
                    price = {40}
                    name = "BENGOO G9000 Stereo Gaming Headset"
                    rating = {5}
                 />
                 

                 <Product
                    id = {10}
                    img = "https://m.media-amazon.com/images/I/71a34zpJkbL._AC_UL480_FMwebp_QL65_.jpg"
                    price = {40}
                    name = "BestOffice PC Gaming Chair"
                    rating = {5}
                 />
                 
            </div>
            
        </div>
    )
}

export default ShowProducts
