import React from 'react'
import { TextField, MenuItem } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star'
import { useStateValue } from '../../../contexts/StateProvider';
import './styles.css'

const quantities = [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
    {
      value: '4',
      label: '4',
    },
  ];

function CartItem({ id, image, title, price, rating }) {
    const [quantity, setQuantity] = React.useState(1);

    const hangleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const [, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className='cartItem'>
            <div className='cartItem__left'>
                <img src={image} alt={title} />
                <div className='cartItem__info'>
                    <p className="cartItem__title">{title}</p>
                    <p className='cartItem__inStock'>In stock</p>
                    <div className='cartItem__rating'>
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p key={i}><StarIcon style={{ color: '#FFA41C' }} /></p>
                            ))
                        }
                    </div>
                    <p className="cartItem__freeShipping">Eligible for FREE Shipping</p>
                    <div className='fba'>
                        <img alt="" src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" height="18px" data-a-hires="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" />
                    </div>
                    <div className='cartItem__quantity'>
                        <TextField
                            className='cartItem__quantityText'
                            size='small'
                            select
                            label="Quantity" 
                            value={quantity}
                            onChange={hangleQuantityChange}
                            variant="outlined"
                        >
                        {quantities.map((option) => (
                            <MenuItem style={{fontSize: 14}} key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                        <button onClick={removeFromBasket}>Remove from cart</button>
                    </div>
                </div>
            </div>

            <div className='cartItem__right'>
                <p className="cartItem__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>

        </div>
    )
}

export default CartItem
