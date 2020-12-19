import React from 'react'
import { useStateValue } from '../contexts/StateProvider'
import './Product.css'

function Product({id, title, price, image, rating}) {
    const [, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id, title, image, price, rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i ) => (
                        <p key={i}>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="Product"/>
            <button title="Add to Shopping Cart" onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
