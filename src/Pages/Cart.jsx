
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Components/Navbar'
import { Box, Container, CssBaseline, IconButton, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { minusCounter } from '../store/slices/CountSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import RemoveShoppingCartTwoToneIcon from '@mui/icons-material/RemoveShoppingCartTwoTone';


const AddToCart = () => {
const  dispatch = useDispatch()
const { id } = useParams();

const [cartItems, setCartItems] = useState(() => {
  return JSON.parse(localStorage.getItem('AddToCart')) || [];
});

console.log(cartItems);

const deleted = (itemId) => {
  const updatedCart = cartItems.filter((cart) => cart.id !== itemId);

  localStorage.setItem('AddToCart', JSON.stringify(updatedCart));

  setCartItems(updatedCart);
};

const minusCount = (itemId) => {
  dispatch(minusCounter());
  deleted(itemId)
};
console.log(cartItems.map(cart => cart.id));




// const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ marginTop: '100px'}} >
            <Navbar />
              {cartItems? (cartItems.map((cart)=>(
                 <Grid style={{ display: 'flex', flexWrap: 'wrap' }}>
                 
                    <Card  key={`${  cart.id + 1}`}  style={{display: 'flex', width: '100%',   marginTop: 20, justifyContent: 'space-evenly'}}>
                      <Link style={{textDecoration: 'none'}} to={`/DetailedPg/${cart.id}` }>
                        <CardMedia
                          component="img"
                          height="100"
                          image={cart.thumbnail}
                          alt="Product Image"
                          style={{ width: '100px' }}
                         />
                        <CardContent>
                          <Typography variant="body1" component="div" >
                             {cart.description}
                          </Typography>
                        </CardContent>
                        </Link>
                        <IconButton size="large"  aria-label="delete" onClick={() => minusCount(cart.id)}>
                         <RemoveShoppingCartTwoToneIcon  style={{ color: 'black', fontSize: '90' }}/>
                        </IconButton>
                       </Card>
                  </Grid>
            ))):('Your Cart Is Empty')}
        </Box>
      </Container>
    </>
  );
};

export default AddToCart;
