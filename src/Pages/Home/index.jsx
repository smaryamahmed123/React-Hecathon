import React from 'react'
import Navbar from '../../Components/Navbar'
import { Box, Container, CssBaseline, TextField } from '@mui/material'
import Cards from '../../Components/Cards'
// , height: '100vh'
 const Home = () => {
  return (
    <>
    <CssBaseline />
      <Container maxWidth="xlg">
        <Box sx={{ marginTop: '100px'}} >
            <Navbar />
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around'
            }}>
            <Cards></Cards>
            {/* <TextField type='file'></TextField> */}
            </Box>
        </Box>
      </Container>
    </>
  )
}
export default Home