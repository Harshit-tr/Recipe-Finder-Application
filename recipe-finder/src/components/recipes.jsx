import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Collapse,
} from "@mui/material";
import DrawerAppBar from "./navbar";
import RecipeCard from "./recipescard";
import ImageSlider from "./swipper";
import { fetchRecipes } from "../utils/api"; 
const Recipes = ( { searchQuery = "" } ) => {
  const [recipes, setRecipes] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    fetchRecipes().then(setRecipes).catch(console.error);
  }, []);
  

  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())  
  );

  return (
    <>
     <ImageSlider />
       <h1 style={styles.heading}>Recipes</h1>
    <div style={styles.container}>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
        <RecipeCard 
        key={recipe._id}
        recipe={recipe}
        expandedId={expandedId}
        handleExpand={handleExpand}
        />
        ))
      ) : (
        <Typography variant="h6" sx={{ color: "red" }}>No recipes found</Typography>
      )}
    </div>
    </>
  );
};
const styles = {
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#d35400",
    margin: "30px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px",
    justifyContent: "center",
    alignItems: "flex-start",

  },
  card: {
    width: 300,
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
    backgroundColor: "#fffaf0", // Light theme
   flexdirection:"column",

  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#d35400", // Orange theme
  },
  details: {
    fontSize: "14px",
    color: "#333",
    backgroundColor: "#ffefd5", // Light cream background
    padding: "10px",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    marginTop: "auto",
    backgroundColor: "#d35400",
    color: "white",
    "&:hover": {
      backgroundColor: "#e67e22",
    },
  },
};

export default Recipes;
