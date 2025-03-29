import {
  Button,
  Input,
  NativeScrollView,
  SizableText,
  SwitchThemeButton,
  XStack,
  YStack,
} from '@repo/ui';
import {
  Menu,
  PackageCheck,
  Plus,
  Search,
  X,
} from '@tamagui/lucide-icons';
import { useState } from 'react';

const QuickAddButton = ({ children }: { children: React.ReactNode }) => (
  <Button
    bg="$primaryOpacity"
    color="$primary"
  >
    {children}
  </Button>
);

const IngredientItem = ({ name, time }: { name: string; time: string }) => (
  <YStack bg="$bg2" rounded={16} p="$4">
    <XStack justify="space-between" items="center">
      <XStack gap="$3" items="center">
        <YStack bg="$primaryOpacity" p="$2" rounded={8}>
          <PackageCheck size={24} color="$primary" />
        </YStack>
        <YStack>
          <SizableText size="$body1" color="$text1">{name}</SizableText>
          <SizableText size="$body2" color="$text2">{`Added ${time}`}</SizableText>
        </YStack>
      </XStack>
      <Button unstyled>
        <X size={20} color="$text2" />
      </Button>
    </XStack>
  </YStack>
);

const CategorySection = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <YStack gap="$2">
    <SizableText size="$h2" color="$text1">{title}</SizableText>
    <YStack gap="$2">
      {children}
    </YStack>
  </YStack>
);

export const IngredientsHomeScreen = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <NativeScrollView>
      <YStack flex={1} px={24} py={32} bg="$bg1" gap="$6">
        <XStack justify="space-between" items="center">
          <SizableText size="$h1">Ingredientes de Casa</SizableText>
          <XStack gap="$4" items="center">
            <SwitchThemeButton />
            <Menu size={24} color="$text1" />
          </XStack>
        </XStack>

        <YStack rounded={16} p="$4" bg="$bg2" mb="$6">
          <XStack justify="space-between" items="center" mb="$4">
            <SizableText size="$h2" color="$text1">Quick Add</SizableText>
            <Button variant='text' color='$primary'>
            Clear All
            </Button>
          </XStack>
          <XStack flexWrap="wrap" gap="$2">
            <QuickAddButton>Chicken</QuickAddButton>
            <QuickAddButton>Rice</QuickAddButton>
            <QuickAddButton>Tomatoes</QuickAddButton>
            <QuickAddButton>Onions</QuickAddButton>
            <QuickAddButton>Garlic</QuickAddButton>
            <QuickAddButton>+ More</QuickAddButton>
          </XStack>
        </YStack>

        <XStack gap="$3" mb="$6">
          <YStack flex={1} position="relative">
            <Input
              placeholder="Search ingredients..."
              value={searchText}
              onChangeText={setSearchText}
              rounded={16}
              pl="$6"
            />
            <Search
              size={20}
              color="$text2"
              position="absolute"
              l="$3"
            />
          </YStack>
          <Button bg="$primary" color="$lightText">
            <Plus size={24} />
          </Button>
          <Button bg="$primary" color="$lightText">
            <PackageCheck size={24} />
          </Button>
        </XStack>

        <YStack space="$4">
          <CategorySection title="Meat & Seafood">
            <IngredientItem name="Chicken Breast" time="2 days ago" />
            <IngredientItem name="Salmon" time="1 day ago" />
            <IngredientItem name="Ground Beef" time="3 days ago" />
            <IngredientItem name="Pork Chops" time="4 days ago" />
            <IngredientItem name="Shrimp" time="1 day ago" />
            <IngredientItem name="Tuna" time="5 days ago" />
          </CategorySection>

          <CategorySection title="Pantry">
            <IngredientItem name="Brown Rice" time="1 week ago" />
            <IngredientItem name="Pasta" time="2 weeks ago" />
            <IngredientItem name="Olive Oil" time="3 weeks ago" />
            <IngredientItem name="Canned Tomatoes" time="1 month ago" />
            <IngredientItem name="Black Beans" time="2 weeks ago" />
            <IngredientItem name="Quinoa" time="1 week ago" />
          </CategorySection>

          <CategorySection title="Produce">
            <IngredientItem name="Tomatoes" time="3 days ago" />
            <IngredientItem name="Lettuce" time="1 day ago" />
            <IngredientItem name="Carrots" time="4 days ago" />
            <IngredientItem name="Bell Peppers" time="2 days ago" />
            <IngredientItem name="Onions" time="5 days ago" />
            <IngredientItem name="Garlic" time="1 week ago" />
          </CategorySection>
        </YStack>
      </YStack>
    </NativeScrollView>
  );
};
