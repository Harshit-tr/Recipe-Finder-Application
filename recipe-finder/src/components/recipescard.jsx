import React from "react";
import { Card, CardContent, Typography, Button, Collapse } from "@mui/material";

const RecipeCard = ({ recipe, expandedId, handleExpand }) => {
  return (
    <Card key={recipe._id} sx={styles.card}>
      <CardContent>
        <Typography variant="h6" sx={styles.title}>
          {recipe.name}
        </Typography>
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
};

export default RecipeCard;
