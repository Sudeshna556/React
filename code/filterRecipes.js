//? steps:

// - usesate hook to update the rating and cart
// - use filter() to filterout the data with rating
// -  calculate avg rating
//                    - collect the ratings

//                    - sum the rating : Use .reduce() to accumulate the total
//                        const total = reviews.reduce((sum, r) => sum + r.rating, 0);

//                    - devide by the number of rating,This gives you the average.

// - add to cart fun to add the recipes and update the state [use spread operator]

// - Display total cart items (from cart.length)

// - provide options <select>  and use onChange handler to update the rating

// - map over filtered recipes and  display cards.




//? REVISE Tpoics : filter, map, reduce







import React, { useState } from "react";
import "./styles.css"; 

// const RecipeFilterApp = () => {
//   const [minRating, setMinRating] = useState(4);
//   const [cart, setCart] = useState([]);

//   const filterRecipesData = recipesData.filter(recipe => recipe.rating >= minRating);

//   // const avgRating = filterRecipesData.reduce((sum, r) => sum + r.rating, 0) / (filterRecipesData || 1)

//   // const addToCart = (recipe) => {
//   //   setCart((prevCart) => [...prevCart, recipe])
//   // }

//   const totalCartItems = cart.length;

//   return (
//     <div>
//       <h1>🍽️ Recipe Explorer</h1>

//     </div>
//   );
// };

export default RecipeFilterApp;



















//? explaination
  const avgRating = filterRecipesData.reduce((sum, r) => sum + r.rating, 0) / (filterRecipesData || 0)

// - Sum all ratings using .reduce()
// - Divide by the number of items to get the average
// - Fallback to 0 if filterRecipesData is falsy
