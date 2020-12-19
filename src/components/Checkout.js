import React from 'react'
import CheckoutItem from './CheckoutItem'
import SubTotal from './SubTotal'
import './Checkout.css'
import { useStateValue } from '../contexts/StateProvider';

function Checkout() {
    const [{basket},] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <h2 className="checkout__title">Shopping Cart</h2>
                <div className="checkout__items">
                    {basket.map(item => (
                        <CheckoutItem 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <img alt="Ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"></img>
                <SubTotal/>
            </div>
        </div>
    )
}

export default Checkout
