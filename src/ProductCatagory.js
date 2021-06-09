import React from 'react'
import Card from './Card'
import './ProductCatagory.css'
import ShowProducts from './ShowProducts'

function ProductCatagory() {
    return (
        <div className = "productcatagory" >
            <div className = "hero" ></div>

            <div className = "productcatagory__cards">
                <Card 
                    title = "Rently  viewed" 
                    img = "https://m.media-amazon.com/images/I/51vBB28YqTL._AC_SL260_.jpg"
                />

                <Card 
                    title = "Electornics" 
                    img = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                />

                <Card 
                    title = "Oculus" 
                    img = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg"
                />

                <Card 
                    title = "Amazon basics"
                    img = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />

                <Card 
                    title = "Deals and promotions" 
                    img = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
                />

                <Card 
                    title = "Laptop and tablets" 
                    img = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
                />

                <Card 
                    title = "Kitchens" 
                    img = "https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-24E3FFC6369EAE1D._V534177827_.jpg"
                />

                <Card 
                    title = "Explore home" 
                    img = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
                />
            </div>

            
        </div>
    )
}

export default ProductCatagory
