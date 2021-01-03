import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, TextField, MenuItem } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star'
import { AddShoppingCart } from '@material-ui/icons'
import { useStateValue } from '../../../../contexts/StateProvider'
import useStyles from './styles'

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

const Product = ({ product }) => {
    const [, dispatch] = useStateValue();

    const classes = useStyles();
    const [quantity, setQuantity] = React.useState(1);

    const hangleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: product.id,
                title: product.data.title,
                image: product.data.image,
                price: product.data.price,
                rating: product.data.rating
            }
        })
    }

    return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.data.image} title={product.data.title} />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography className={classes.title} variant="h5" component="h2">
              {product.data.title}
            </Typography>
            <Typography className={classes.price} variant="h5" component="h2">
              ${product.data.price}
            </Typography>
          </div>
        </CardContent>
        <div className={classes.rating}>
            {Array(product.data.rating)
                .fill()
                .map((_, i ) => (
                <p key={i}><StarIcon/></p>
                ))
            }
        </div>
        <CardActions className={classes.cardActions}>
            <TextField
                className={classes.quantity}
                size='small'
                select
                label="Quantity"
                value={quantity}
                onChange={hangleQuantityChange}
                variant="outlined"
                >
                {quantities.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <IconButton aria-label="Add to Cart" onClick={addToCart}>
                <AddShoppingCart/>
            </IconButton>
        </CardActions>
    </Card> 
  );
};

export default Product;