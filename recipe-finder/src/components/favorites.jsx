import React, { useState, useEffect } from "react";
import { Container, Typography, Grid } from "@mui/material";
import RecipeCard from "./recipescard"; // Ensure correct path
import ImageSlider from "./swipper";

const Favorites = ({ searchQuery = "" }) => {
  const [favorites, setFavorites] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, [searchQuery]);

  const filteredFavorites = favorites.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())  
  );

  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
    <ImageSlider/>
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", margin: "20px 0", color: "#d35400" }}>
        Favorite Recipes ❤️
      </Typography>

      <Grid container spacing={3}>
        {filteredFavorites.length > 0 ? (
          filteredFavorites.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe._id}>
              <RecipeCard 
                recipe={recipe} 
                expandedId={expandedId}
                handleExpand={handleExpand}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ color: "red", textAlign: "center" }}>
              No favorite recipes found
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
    </>
  ); 
};

export default Favorites;
