import React from 'react'
import Navbar from '../Components/Navbar'
import { Box, Container, CssBaseline } from '@mui/material'
const Services = () => {
  return (

    <>
    <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', marginTop: '100px'}} >
            <Navbar />
         <h1>Services</h1>
        </Box>
      </Container>
    </>
  )
}

export default Services