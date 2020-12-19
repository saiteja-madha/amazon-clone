import React from 'react'
import BasketItem from './BasketItem'
import SubTotal from './SubTotal'
import './Checkout.css'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <h2 className="checkout__title">Shopping Cart</h2>
                <div className="checkout__items">
                    <BasketItem/>
                </div>
            </div>
            <div className="checkout__right">
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout
