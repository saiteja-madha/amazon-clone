import React from 'react'
import { useStateValue } from '../contexts/StateProvider';
import './CheckoutItem.css'

function CheckoutItem({id, image, title, price, rating}) {
    const [, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className="checkoutItem">
            <img src={image} alt={title}/>
            <div className="checkoutItem__info">
                <p className="checkoutItem__title">{title}</p>
                <p className="checkoutItem__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutItem__rating">
                        {Array(rating)
                        .fill()
                        .map((_, i ) => (
                        <p key={i}>⭐</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutItem
