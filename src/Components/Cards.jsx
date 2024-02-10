
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { fetchData } from '../store/slices/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { HeartRating } from './Icons';

const Cards = () => {

   const [openDialog, setOpenDialog] = useState(false);
   const [selectedProduct, setSelectedProduct] = useState(null);

    const dispatch = useDispatch()
    const { allProducts, isLoading, error } = useSelector((state) => state.product);
    console.log("selector",allProducts, isLoading, error );

    useEffect(() => {
      dispatch(fetchData());
    }, []);


    const handleOpenDialog = (product) => {
      setSelectedProduct(product);
      setOpenDialog(true);
    };
    



  return (
    <>
    {/* <h1>dard</h1> */}
     <Grid style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {isLoading ? (
        'Loading...'
      ) : error ? (
        `Error: ${error}`
      ) : allProducts ? (                                                     
        allProducts.map((product) => (
          <Link key={product.id} to={`/DetailedPg/${product.id}`}>
            <Card
              key={product.id}
              sx={{
                flex: '0 0 auto',
                maxWidth: 280,
                cursor: 'pointer',
                marginTop: 10,
                mt: 15,
              }}
              onDoubleClick={() => handleDoubleClick(product.id)}
              onClick={() => handleOpenDialog(product)}
            >
              <CardMedia
                sx={{ height: 150 }}
                image={product.thumbnail}
                alt={product.title}
                title={product.title}
              />
              <CardContent>
                <Typography
                  display="flex"
                  justifyContent="space-between"
                  fontWeight="bold"
                  color="black"
                  variant='body1'>
                  Rs {product.price}
                  {/* <HeartRating /> */}
                </Typography>

                <Typography variant="body2" fontWeight="bolder" >
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))
        ) : (
          'No products available.'
        )}
    </Grid>
      
    </>
  );
};





export default Cards;

