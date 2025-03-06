import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{recipe.title}</h3>
        <p className="text-gray-600">{recipe.description}</p>
        <Link
          to={`/recipe/${recipe.id}`}
          className="block mt-2 text-blue-500 hover:underline"
        >
          Δες περισσότερα →
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
