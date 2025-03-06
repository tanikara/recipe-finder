import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {recipes.length > 0 ? (
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
      ) : (
        <p className="text-gray-600 col-span-full text-center">Δεν βρέθηκαν συνταγές!</p>
      )}
    </div>
  );
};

export default RecipeList;
