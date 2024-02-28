import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";
export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();
  return (
    <div>
      {selectedRecipe ? (
        <RecipePage clickFn={setSelectedRecipe} recipe={selectedRecipe} />
      ) : (
        <RecipeListPage clickFn={setSelectedRecipe} />
      )}
    </div>
  );
};
