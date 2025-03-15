import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DrawerAppBar from "./components/navbar";
import Favorites from "./components/favorites";
import Contact from "./components/contact";
import Home from "./components/home";
import Recipes from "./components/recipes";
import Footer from "./components/footer";

const App = () => {
  const [search , setSearch] = useState("");
  return (
    <Router>
         <DrawerAppBar  setSearch={setSearch} /> 
      <Routes>
        <Route path="/" element={<Home searchQuery={search} />} />
        <Route path="/recipes" element={<Recipes  searchQuery={search} />} />
        <Route path="/favorites" element={<Favorites searchQuery={search} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
