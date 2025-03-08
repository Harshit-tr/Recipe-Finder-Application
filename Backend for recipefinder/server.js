import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import Recipe from "./models/Recipe.js"; // ✅ Recipe Model Import Kiya

dotenv.config(); // ✅ .env Config Load Kiya

const app = express();
app.use(express.json()); // ✅ JSON Parse Karne Ke Liye Middleware
app.use(cors()); // ✅ CORS Enable Kiya

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("🔥 MongoDB Connected"))
  .catch((err) => console.log(err));

// ✅ Recipe Insert Karne Ka API
app.post("/api/recipes", async (req, res) => {
  try {
   const recipes = req.body;
   const insertedRecipes = await Recipe.insertMany(recipes); //for multi-recipes insert into database into one time
    res.status(201).json({ message: "✅ Recipe Added!", data: insertedRecipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get("/api/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find(); // 🔹 Saari recipes fetch karo
    res.status(200).json(recipes); // 🔹 Response send karo
  } catch (error) {
    res.status(500).json({ error: error.message }); // 🔹 Error handle karo
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
