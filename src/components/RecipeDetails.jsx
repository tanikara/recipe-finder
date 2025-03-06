import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import mockRecipes from "../data/mockRecipes"; // Θα το φτιάξουμε σε λίγο

const RecipeDetails = () => {
  const { id } = useParams(); // Παίρνουμε το ID από το URL
  const navigate = useNavigate(); // Για να γυρνάμε πίσω
  const recipe = mockRecipes.find((r) => r.id === Number(id)); // Βρίσκουμε τη συνταγή

  if (!recipe) {
    return <p className="text-center text-red-500">Η συνταγή δεν βρέθηκε!</p>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mt-6">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg" />
      <h2 className="text-2xl font-bold mt-4">{recipe.title}</h2>
      <p className="text-gray-700 mt-2">{recipe.description}</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        🔙 Πίσω
      </button>
    </div>
  );
};

export default RecipeDetails;
