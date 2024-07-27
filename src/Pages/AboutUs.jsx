// AboutUs.js
import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our e-commerce platform! We are dedicated to providing you with the best products and services.
          Our team works tirelessly to source high-quality items that meet your needs and preferences.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to make online shopping easy, accessible, and enjoyable. We believe in delivering exceptional customer service and building lasting relationships with our customers.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for choosing us. We look forward to serving you!
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body2">
              To provide high-quality products and exceptional customer service, ensuring an enjoyable online shopping experience for all.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Our Values
            </Typography>
            <Typography variant="body2">
              Integrity, Quality, Customer Satisfaction, and Innovation.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
