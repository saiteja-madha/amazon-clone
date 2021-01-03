import React from 'react'
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import './styles.css'

function Order({ order }) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map((item)=> (
                <div key={item.id} className="checkoutItem">
                    <img src={item.image} alt={item.title}/>
                    <div className="checkoutItem__info">
                        <p className="checkoutItem__title">{item.title}</p>
                        <p className="checkoutItem__price">
                            <small>$</small>
                            <strong>{item.price}</strong>
                        </p>
                        <div className="checkoutItem__rating">
                                {Array(item.rating)
                                .fill()
                                .map((_, i ) => (
                                <p key={i}>⭐</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />   
        </div>
    )
}

export default Order
