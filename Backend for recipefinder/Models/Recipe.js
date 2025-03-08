import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  Image: { type: String, required: false },
});

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;
