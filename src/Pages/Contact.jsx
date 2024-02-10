import React from 'react'
import Navbar from '../Components/Navbar'
import { Box, Container, CssBaseline, TextField } from '@mui/material'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
// import { TextFields, FullTextField, MultipleSelect } from './TextField';
import UnderlineLink from '../Components/Link';
// import ColorButtons from './Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import Alerts from './SweatAlert';
import { useState } from "react";
import MultipleSelect from '../Components/Selector'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Contact = () => {
  return (
    <>
    <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', marginTop: '100px'}} >
            <Navbar />
         <h1>Contact</h1>
         <RowAndColumnSpacing></RowAndColumnSpacing>
        </Box>
      </Container>
    </>
  )
}

export default Contact






function RowAndColumnSpacing() {
  const [user, setuser] = useState({
    fName:'',
    lName:'',
    email:'',
    number:'',
    address:'',
    message:''
  });
  let name, value;
  const getUserData = (event)=>{
    name = event.target.name;
    value = event.target.value;

    setuser({...user, [name]: value})
  }
  return (
    <Box sx={{ width: '100%', mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{m: 10}}>
          <Item style={{ padding: 15, backgroundColor: 'lightcyan' }}>
            {/* First row */}
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField  label='First Name' name='fName' value={user.fName} onChange={getUserData} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label='Last Name' name='lName' value={user.lName} onChange={getUserData} />
              </Grid>
            </Grid>

            {/* Second row */}
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField label='Email' name='email'  value={user.email} onChange={getUserData}/>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label='WhatsApp No.' name='number' value={user.number} onChange={getUserData} />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label='Address' name='address' value={user.address} onChange={getUserData} />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField label='City' name='message' value={user.message} onChange={getUserData} />
              </Grid>
              <Grid item xs={12} md={6}>
                <MultipleSelect />
              </Grid>
              <Grid item xs={12} md={6}>
                <textarea name=""  id="" cols="30" rows="10" style={{width: '300px',height: '150px'}}></textarea>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item style={{ padding: 20, backgroundColor: 'lightcyan' }}>
            <Typography variant="h2" gutterBottom>
              Get In Touch
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 5,
                '& > :not(style)': {
                  mr: 2, // Margin between items
                },
              }}
            >
              <WhatsAppIcon style={{ color: 'green' }} />
              <UnderlineLink href="tel:03332298285" label="0333 2298285" actionType="call" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 5,
                '& > :not(style)': {
                  mr: 2, // Margin between items
                },
              }}
            >
              <EmailIcon style={{ color: '#0330fc' }} />
              <UnderlineLink href="mailto:kamalsahmed@gmail.com" label="kamalsahmed@gmail.com" actionType="email" />
            </Box>
            {/* <Alerts /> */}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}


