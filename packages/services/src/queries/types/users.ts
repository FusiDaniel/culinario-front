import type { Dish } from './dishes';
import type { Ingredient } from './ingredients';

type DietaryRestriction = {
  id: number;
  name: string;
};

type GroceriesListItem = {
  amount: number;
  id: number;
  ingredient: Ingredient;
}[];

export type UserMe = {
  dietaryRestrictions: DietaryRestriction[];
  email: string;
  groceriesList: GroceriesListItem[];
  homeIngredients: Ingredient[];
  id: number;
  preferredUnits: string[];
  savedDishes: Dish[];
};
