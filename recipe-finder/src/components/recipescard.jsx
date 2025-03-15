import React , {useState , useEffect} from "react";
import { Card, CardContent, Typography, Button, Collapse , IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
const RecipeCard = ({ recipe, expandedId, handleExpand }) => {
  const [isfavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(savedFavorites.some((fav)=>fav._id === recipe._id));
  } , [recipe._id] );
  const handleFavoriteToggle = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if(isfavorite){
      favorites = favorites.filter((fav) => fav._id !== recipe._id);
    } else {
      favorites.push(recipe);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isfavorite);
  }
  return (
    <Card key={recipe._id} sx={styles.card}>
      <CardContent>
        <Typography variant="h6" sx={styles.title}>
          {recipe.name}
        </Typography>
      {/* ✅ Heart Icon Button */}
      <IconButton onClick={handleFavoriteToggle} sx={{ position: "absolute", top: 10, right: 10 }}>
          {isfavorite ? <Favorite sx={{ color: "red" }} /> : <FavoriteBorder />}
        </IconButton>
      </CardContent>

      <Collapse in={expandedId === recipe._id} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body1" sx={styles.details}>
            {recipe.instructions}
          </Typography>
        </CardContent>
      </Collapse>

      <Button
        size="small"
        onClick={() => handleExpand(recipe._id)}
        sx={styles.button}
      >
        {expandedId === recipe._id ? "Collapse" : "Expand"}
      </Button>
    </Card>
  );
};

// ✅ Common Styles
const styles = {
  card: {
    width: 300,
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
    backgroundColor: "#fffaf0",
    position: "relative",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#d35400",
  },
  details: {
    fontSize: "14px",
    color: "#333",
    backgroundColor: "#ffefd5",
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
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
};

export default RecipeCard;
