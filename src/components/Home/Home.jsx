import React from 'react'
import Products from './Products/Products'
import './styles.css'

const products = [{
    id: 1,
    title: "PICTEK Gaming Mouse Wired",
    image: "https://images-na.ssl-images-amazon.com/images/I/61gxUsLtlyL._AC_SL1280_.jpg",
    price: 15.99,
    rating: 5,
},
{
    id: 2,
    title: "Xbox Wireless Controller - Black",
    image: "https://images-na.ssl-images-amazon.com/images/I/41LO2OX6pRL.jpg",
    price: 61.30,
    rating: 4,
},
{
    id: 3,
    title: "PlayStation 4 Pro 1TB Console",
    image: "https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_.jpg",
    price: 440.99,
    rating: 5,
},
{
    id: 4,
    title: "Mi Smart Band 5-1.1” AMOLED Color Display",
    image: "https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg",
    price: 50.99,
    rating: 3,
},
{
    id: 5,
    title: "OnePlus Y Series 80 cm",
    image: "https://images-na.ssl-images-amazon.com/images/I/817gj7pfUzL._SL1500_.jpg",
    price: 300.19,
    rating: 4,
},
{
    id: 6,
    title: "PICTEK TKL Mechanical Gaming Keyboard",
    image: "https://images-na.ssl-images-amazon.com/images/I/61s90CJzEzL._SL1200_.jpg",
    price: 31.30,
    rating: 4,
},
{
    id: 7,
    title: "ASUS TUF TUF506IU-ES74 Gaming A15 Gaming Laptop",
    image: "https://images-na.ssl-images-amazon.com/images/I/91MW2X7lrfL._AC_SL1500_.jpg",
    price: 440.99,
    rating: 5,
},
{
    id: 8,
    title: "ASUS Cerberus GeForce GTX 1050 Ti 4GB OC Edition",
    image: "https://images-na.ssl-images-amazon.com/images/I/91sPs0ELPnL._SL1500_.jpg",
    price: 150.99,
    rating: 3,
},
{
    id: 9,
    title: "HyperX Fury 8GB 3200MHz DDR4",
    image: "https://images-na.ssl-images-amazon.com/images/I/71%2ByJbBOZCL._SL1500_.jpg",
    price: 50.49,
    rating: 4,
}
]

function Home() {
    return (
        <div className="home">
            <img className="home__banner" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Christmas20/GW/new/Christmas-GW-Hero-PC1x._CB413564947_.jpg" alt="Banner"/>
            <Products products={products}/>
        </div>
    )
}

export default Home
