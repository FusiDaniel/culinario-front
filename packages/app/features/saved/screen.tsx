import {
  Button,
  NativeScrollView,
  SizableText,
  SwitchThemeButton,
  XStack,
  YStack,
} from '@repo/ui';
import {
  Menu,
  SlidersHorizontal,
} from '@tamagui/lucide-icons';
import { SearchBar } from '../../features/home/components/SearchBar/SearchBar';
import { RecipeCard } from './components/RecipeCard';

type Recipe = {
  description: string;
  id: string;
  image: string;
  ingredientsCount: number;
  time: number;
  title: string;
};

const savedRecipes: Recipe[] = [
  {
    description: 'Fresh and nutritious salad with a variety of colorful vegetables and a light vinaigrette',
    id: '1',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    ingredientsCount: 8,
    time: 30,
    title: 'Healthy Salad',
  },
  {
    description: 'Authentic Italian pasta with homemade tomato sauce and fresh basil',
    id: '2',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    ingredientsCount: 6,
    time: 45,
    title: 'Pasta Dish',
  },
  {
    description: 'Tender grilled chicken with herbs and spices served with roasted vegetables',
    id: '3',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    ingredientsCount: 7,
    time: 40,
    title: 'Grilled Chicken',
  },
  {
    description: 'Hearty vegetable soup with seasonal ingredients and aromatic herbs',
    id: '4',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    ingredientsCount: 10,
    time: 60,
    title: 'Vegetable Soup',
  },
  {
    description: 'Classic Neapolitan pizza with tomato sauce, fresh mozzarella, and basil leaves',
    id: '5',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    ingredientsCount: 5,
    time: 50,
    title: 'Margherita Pizza',
  },
  {
    description: 'Rich and moist chocolate cake with a silky ganache frosting',
    id: '6',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b',
    ingredientsCount: 9,
    time: 90,
    title: 'Chocolate Cake',
  },
  {
    description: 'Creamy avocado spread on whole grain toast topped with microgreens and seeds',
    id: '7',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445',
    ingredientsCount: 4,
    time: 15,
    title: 'Avocado Toast',
  },
  {
    description: 'Nourishing bowl with grains, vegetables, proteins and a tasty dressing',
    id: '8',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
    ingredientsCount: 12,
    time: 35,
    title: 'Buddha Bowl',
  },
];

export const SavedRecipesScreen = () => (
  <NativeScrollView>
    <YStack flex={1} px="$6" py="$8" bg="$bg1" gap="$6">
      <XStack justify="space-between" items="center">
        <SizableText size="$h1">Saved Recipes</SizableText>
        <XStack gap="$4" items="center">
          <SwitchThemeButton />
          <Menu size={24} color="$text1" />
        </XStack>
      </XStack>

      <YStack gap="$3">
        <SearchBar />
        <XStack justify="flex-end">
          <Button
            bg="$bg2"
            color="$text2"
            leftIcon={SlidersHorizontal}
            size="LG"
          >
            Sort by
          </Button>
        </XStack>
      </YStack>

      <YStack gap="$4">
        {savedRecipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            image={recipe.image}
            title={recipe.title}
            description={recipe.description}
            time={recipe.time}
            ingredientsCount={recipe.ingredientsCount}
          />
        ))}
      </YStack>
    </YStack>
  </NativeScrollView>
);
