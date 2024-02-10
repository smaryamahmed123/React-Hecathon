
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useParams } from 'react-router-dom';
import { fetchData } from '../store/slices/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Card, Container, CssBaseline, Grid, ImageList, Stack, Typography } from '@mui/material';
import Navbar from '../Components/Navbar';
import { TextRating } from '../Components/Icons';
// import Buttons from '../Components/Button';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../Config/Firebase';
import {  getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addCounter } from '../store/slices/CountSlice';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DetailedPg = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const { allProducts, isLoading, error } = useSelector((state) => state.product);
  console.log("selector",allProducts, isLoading, error );
  const selectedProduct = allProducts.find((product) => product.id === parseInt(id));
  const [selectedFiles, setSelectedFiles] = useState([]);
  const uid = localStorage.getItem("uid")
  
  const buyNow = async () => {
  try {
    const userObj = {
      brand: selectedProduct.brand,
      category: selectedProduct.category,
      description: selectedProduct.description,
      discountPercentage: selectedProduct.discountPercentage,
      id: selectedProduct.id,
      images: selectedProduct.images,
      price: selectedProduct.price,
      rating: selectedProduct.rating,
      stock: selectedProduct.stock,
      thumbnail: selectedProduct.thumbnail,
      title: selectedProduct.title,
    };

    console.log(uid);
    const userDocRef = doc(db, 'users', uid);
    const userDocSnap = await getDoc(userDocRef);
    if (!userDocSnap.exists()) {
      await setDoc(userDocRef, { cart: [userObj] });
    } else {
      const existingData = userDocSnap.data();
      const existingCart = existingData.cart || [];
      existingCart.push(userObj);
      await updateDoc(userDocRef, { cart: existingCart });
    }
    const thumbnailRef = ref(storage, `thumbnails/${selectedProduct.id}.jpg`);
    await uploadBytes(thumbnailRef, [selectedProduct.thumbnail]).then((success)=>{

      getDownloadURL(success.ref).then(
          (url)=>{
            console.log('YE RAHA DOWNLOADABLE URL ===>',url);
          }
      ).catch( (err)=>{
        console.log(err);
      })
  }).catch((error)=>{
         console.log(error)
  
     });

     toast.success("Your order Product You will receive soon", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  } catch (error) {
    console.log(error.message);
  }
};

const addToCart = ()=>{
 try {
  const userObj = {
    brand: selectedProduct.brand,
    category: selectedProduct.category,
    description: selectedProduct.description,
    discountPercentage: selectedProduct.discountPercentage,
    id: selectedProduct.id,
    images: selectedProduct.images,
    price: selectedProduct.price,
    rating: selectedProduct.rating,
    stock: selectedProduct.stock,
    thumbnail: selectedProduct.thumbnail,
    title: selectedProduct.title,
  };
const existingData = JSON.parse(localStorage.getItem('AddToCart')) || [];

existingData.push(userObj);

localStorage.setItem('AddToCart', JSON.stringify(existingData)); 
toast.success("Added To Cart successfully", {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
});

 } catch (error) {
  console.log(error)
 }




}


const addCount = () => {
  dispatch(addCounter());
  addToCart()
};

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xlg">
        <Box sx={{ marginTop: '100px' }}>
          <Navbar />
          <Grid >
            {selectedProduct ? (
              <Box sx={{display: 'flex'}}>
                <Box sx={{height: '50%', width: '70%',  objectFit: 'cover',}}>
                  <MyCarousel images={selectedProduct.images} />
                <Typography color="black" fontWeight="bold">{selectedProduct.description}</Typography>
                </Box>
                <Box>
                <Typography variant='h3' color="black"> {selectedProduct.category}</Typography>
                <Typography variant='h4' color="black">{selectedProduct.discountPercentage}%</Typography>
                <Typography variant='h4' color="black">{selectedProduct.price}Rs.</Typography>
                <Typography variant='h5' color="black">Brand: {selectedProduct.brand}</Typography>
                <Typography color="black">Stock: {selectedProduct.stock}</Typography>
                <TextRating />
                <Stack direction="row" spacing={2}>
                <Button variant="contained" color="secondary" onClick={buyNow}>Buy Now</Button>
                <Button variant="contained" color="secondary" onClick={addCount}>add To Cart</Button>
                </Stack> 
               </Box>
              </Box>
            ) : (
              'Product not found.'
            )}
          </Grid>
        </Box>
      </Container>
    </>
  );
  
}

export default DetailedPg


const MyCarousel = ({ images }) => {
    return (
      <Carousel >
        {images.map((image, index) => (
          <div key={index} 
          style={{ overflow: 'hidden',  objectFit: 'cover', marginLeft: 20, height: '50%', width: '70%'}}>
            <img src={image} alt={`Image ${index + 1}`}  />
          </div>
        ))}
      </Carousel>
    );
  };



