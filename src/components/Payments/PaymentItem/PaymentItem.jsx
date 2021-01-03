import React from 'react'
import { useStateValue } from '../../../contexts/StateProvider';
import './styles.css'

function PaymentItem({id, image, title, price, rating}) {

    const [, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className="paymentItem">
            <img src={image} alt={title}/>
            <div className="paymentItem__info">
                <p className="paymentItem__title">{title}</p>
                <p className="paymentItem__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="paymentItem__rating">
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

export default PaymentItem
