import React from 'react'
import CurrencyFormat from "react-currency-format"
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../contexts/StateProvider';
import { getBasketTotal } from "../contexts/reducer";
import './SubTotal.css'

function SubTotal() {
    const history = useHistory();
    const [{basket, user},] = useStateValue();
    
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>
                            <span>This order contains a gift</span>
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button disabled={!user} className={`${!user && 'button__disabled'} subtotal__button`} onClick={e => history.push('/payment')} title="Proceed to Checkout">{user ? 'Proceed to Checkout':'Sign in to Checkout' }</button>
        </div>
    )
}

export default SubTotal
