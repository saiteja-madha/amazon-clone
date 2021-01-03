import React from 'react'
import { useStateValue } from '../../contexts/StateProvider'
import SubTotal from '../Subtotal/SubTotal'
import CartItem from './CartItem/CartItem'

import './styles.css'

function Cart() {
    const [{ basket },] = useStateValue();

    return (
        <div className="cart">
            <div className='cart__left'>
                <div className='cart__leftHeading'>
                    <h2 className='cart__title'>Shopping Cart</h2>
                    <span className='cart__selection'>Deselect all items</span>
                </div>
                <div className='cart__items'>
                    {basket.map(item => (
                        <CartItem
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
            <div className='cart__right'>
                <img alt='Ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png'></img>
                <SubTotal />
            </div>
        </div>
    )
}

export default Cart
