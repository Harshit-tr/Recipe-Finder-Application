import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./recipescard";
import { Typography, Container, Grid } from "@mui/material";
import DrawerAppBar from "./navbar";
import ImageSlider from "./swipper";
export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(""); 
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/recipes")
      .then((response) => setRecipes(response.data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase()) 
  );

  return (
    <>
     <ImageSlider />
    <div>
      <DrawerAppBar setSearch={setSearch} />
      <Container>
        <Typography variant="h4" sx={styles.heading}>Trending Recipes</Typography>
        <Grid container spacing={3}>
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <Grid item xs={12} sm={6} md={4} key={recipe._id}>
                <RecipeCard
                  recipe={recipe}
                  expandedId={expandedId}
                  handleExpand={handleExpand}
                />
              </Grid>
            ))
          ) : (
            <Typography sx={{ textAlign: "center", color: "gray", mt: 3 }}>
              No recipes found.
            </Typography>
          )}
        </Grid>
      </Container>
     
    </div>
   
    </>
  );
}

const styles = {
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#d35400",
    margin: "30px 0",
    textAlign: "center",
  },
};

