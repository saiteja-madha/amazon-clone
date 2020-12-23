import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <Grid container justify="center" spacing={1}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </main>
  );
};

export default Products;