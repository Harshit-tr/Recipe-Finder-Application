import React from "react";
import { Box, Container, Grid, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";  // ✅ React Router Link use karna hai

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#FF5722", color: "#fff", py: 4, mt: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Recipe Finder
            </Typography>
            <Typography variant="body2">
              Discover and explore delicious recipes from around the world.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link to="/" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: "5px" }}>
                Home
              </Link>
              <Link to="/recipes" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: "5px" }}>
                Recipes
              </Link>
              <Link to="/categories" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: "5px" }}>
                Categories
              </Link>
              <Link to="/favorites" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: "5px" }}>
                Favorites
              </Link>
              <Link to="/contact" style={{ color: "#fff", textDecoration: "none", display: "block" }}>
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Newsletter Subscription */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Subscribe to Newsletter
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Enter your email"
              fullWidth
              sx={{ backgroundColor: "#fff", borderRadius: 1 }}
            />
            <Button
              variant="contained"
              sx={{ mt: 1, backgroundColor: "#fff", color: "#FF5722", ":hover": { backgroundColor: "#f0f0f0" } }}
              fullWidth
            >
              Subscribe
            </Button>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <a href="#" style={{ color: "#fff", textDecoration: "none", marginRight: "10px" }}>
                Facebook
              </a>
              <a href="#" style={{ color: "#fff", textDecoration: "none", marginRight: "10px" }}>
                Instagram
              </a>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Twitter
              </a>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box textAlign="center" mt={3}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Recipe Finder. All rights reserved.
          </Typography>
          <Link to="/privacy-policy" style={{ color: "#fff", textDecoration: "none", marginRight: "10px" }}>
            Privacy Policy
          </Link>
          <Link to="/terms" style={{ color: "#fff", textDecoration: "none" }}>
            Terms & Conditions
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
