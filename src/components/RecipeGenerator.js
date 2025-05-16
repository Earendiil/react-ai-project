import { useState } from "react";

function RecipeGenerator() {
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("any");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [recipe, setRecipe] = useState("");

  const createRecipe = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/recipe-creator?ingredients=${encodeURIComponent(
          ingredients
        )}&cuisine=${encodeURIComponent(
          cuisine
        )}&dietaryRestrictions=${encodeURIComponent(dietaryRestrictions)}`
      );
      const data = await response.text();
      console.log(data);
      setRecipe(data);
    } catch (error) {
      console.error("Error generating recipe:", error);
    }
  };

  return (
    <div>
      <h2>Generate Recipe</h2>
        <label>ingredients</label>
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients (comma separated)"
      />
        <label>Cuisine</label>
      <input
        type="text"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        placeholder="Enter cuisine"
      />
        <label>Dietary Restrictions</label>
      <input
        type="text"
        value={dietaryRestrictions}
        onChange={(e) => setDietaryRestrictions(e.target.value)}
        placeholder="Enter dietary restrictions"
      />
    <div>
         <button onClick={createRecipe}>Create Recipe</button>
    </div>
      <div className="output">
        <pre className="recipe-text">{recipe}</pre>
      </div>
    </div>
  );
}

export default RecipeGenerator;
