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
    image: 'https://picsum.photos/128/128?random=1',
    ingredientsCount: 8,
    time: 30,
    title: 'Healthy Salad',
  },
  {
    description: 'Authentic Italian pasta with homemade tomato sauce and fresh basil',
    id: '2',
    image: 'https://picsum.photos/128/128?random=2',
    ingredientsCount: 6,
    time: 45,
    title: 'Pasta Dish',
  },
  {
    description: 'Tender grilled chicken with herbs and spices served with roasted vegetables',
    id: '3',
    image: 'https://picsum.photos/128/128?random=3',
    ingredientsCount: 7,
    time: 40,
    title: 'Grilled Chicken',
  },
  {
    description: 'Hearty vegetable soup with seasonal ingredients and aromatic herbs',
    id: '4',
    image: 'https://picsum.photos/128/128?random=4',
    ingredientsCount: 10,
    time: 60,
    title: 'Vegetable Soup',
  },
  {
    description: 'Classic Neapolitan pizza with tomato sauce, fresh mozzarella, and basil leaves',
    id: '5',
    image: 'https://picsum.photos/128/128?random=5',
    ingredientsCount: 5,
    time: 50,
    title: 'Margherita Pizza',
  },
  {
    description: 'Rich and moist chocolate cake with a silky ganache frosting',
    id: '6',
    image: 'https://picsum.photos/128/128?random=6',
    ingredientsCount: 9,
    time: 90,
    title: 'Chocolate Cake',
  },
  {
    description: 'Creamy avocado spread on whole grain toast topped with microgreens and seeds',
    id: '7',
    image: 'https://picsum.photos/128/128?random=7',
    ingredientsCount: 4,
    time: 15,
    title: 'Avocado Toast',
  },
  {
    description: 'Nourishing bowl with grains, vegetables, proteins and a tasty dressing',
    id: '8',
    image: 'https://picsum.photos/128/128?random=8',
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
