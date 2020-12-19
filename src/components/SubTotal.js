import React from 'react'
import CurrencyFormat from "react-currency-format"
import BasketItem from './BasketItem'
import './SubTotal.css'

function SubTotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items):
                            <strong> 0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>
                            <span>This order contains a gift</span>
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
