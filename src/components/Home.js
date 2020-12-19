import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__banner" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Christmas20/GW/new/Christmas-GW-Hero-PC1x._CB413564947_.jpg" alt="Banner"/>
            </div>

            <div className="home__row">
                <Product title="PICTEK Gaming Mouse Wired [7200 DPI] [Programmable] [Breathing Light]" price={15.99} image="https://images-na.ssl-images-amazon.com/images/I/61gxUsLtlyL._AC_SL1280_.jpg" rating={5}/>
                <Product title="Xbox Wireless Controller - Black" price={61.30} image="https://images-na.ssl-images-amazon.com/images/I/41LO2OX6pRL.jpg" rating={4}/>
                <Product title="PlayStation 4 Pro 1TB Console" price={440.99} image="https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_.jpg" rating={5}/>
            </div>

            <div className="home__row">
                <Product title="Xbox Wireless Controller - White" price={15.99} image="https://images-na.ssl-images-amazon.com/images/I/71WX6wVepIL._SL1500_.jpg" rating={5}/>
                <Product title="PICTEK TKL Mechanical Gaming Keyboard, RGB LED Rainbow Backlit" price={31.30} image="https://images-na.ssl-images-amazon.com/images/I/71eurRBO7iL._AC_SL1500_.jpg" rating={4}/>
                <Product title="Xbox Wireless Controller - Green" price={440.99} image="https://images-na.ssl-images-amazon.com/images/I/61s90CJzEzL._SL1200_.jpg" rating={5}/>
                <Product title="ASUS TUF TUF506IU-ES74 Gaming A15 Gaming Laptop, 15.6” 144Hz" price={440.99} image="https://images-na.ssl-images-amazon.com/images/I/91MW2X7lrfL._AC_SL1500_.jpg" rating={5}/>
            </div>

            <div className="home__row">
                
            </div>

        </div>
    )
}

export default Home
