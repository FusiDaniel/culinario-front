import type { Ingredient } from './ingredients';

export type RecipeIngredient = {
  amount: number;
  id: number;
  ingredient: Ingredient;
};

export type Dish = {
  categories: string [];
  cookTime: number;
  id: number;
  imageFile: string;
  instructions: string;
  name: string;
  nutritionFacts: { calories: number };
  prepTime: number;
  recipeIngredients: RecipeIngredient[];
};
