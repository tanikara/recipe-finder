import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import mockRecipes from "./data/mockRecipes"; // Θα το φτιάξουμε τώρα

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(mockRecipes);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const results = mockRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipes(results);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="p-4 text-center">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar onSearch={handleSearch} />
                  <RecipeList recipes={filteredRecipes} />
                </>
              }
            />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
