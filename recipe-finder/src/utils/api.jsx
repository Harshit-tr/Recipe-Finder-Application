import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const fetchRecipes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/recipes`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
