import {
  ScrollView,
  SizableText,
  XStack,
  YStack,
} from '@repo/ui';
import { RecipeCard } from './components';

const quickMeals = [
  {
    description: 'Simple and delicious pasta dish',
    id: '1',
    imageUrl: 'https://picsum.photos/280/160?random=1',
    ingredientsCount: 4,
    time: 15,
    title: '15-Minute Pasta',
  },
  {
    description: 'Fresh and super dupper nutritious sandwich ',
    id: '2',
    imageUrl: 'https://picsum.photos/280/160?random=2',
    ingredientsCount: 5,
    time: 10,
    title: 'Healthy Sandwich',
  },
  {
    description: 'Fluffy eggs with your favorite fillings',
    id: '3',
    imageUrl: 'https://picsum.photos/280/160?random=3',
    ingredientsCount: 3,
    time: 8,
    title: 'Quick Omelette',
  },
];

type CarouselProps = {
  title: string;
};

export const Carousel = ({ title }: CarouselProps) => (
  <YStack gap="$4">
    <SizableText size="$h1" color="$text1" px="$6">
      {title}
    </SizableText>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <XStack gap="$4">
        {quickMeals.map(({ description, id, imageUrl, ingredientsCount, time, title }, index) => (
          <RecipeCard
            key={id}
            title={title}
            description={description}
            time={time}
            ingredientsCount={ingredientsCount}
            imageUrl={imageUrl}
            ml={index === 0 ? '$6' : 0}
            mr={index === quickMeals.length - 1 ? '$6' : 0}
          />
        ))}
      </XStack>
    </ScrollView>
  </YStack>
);
