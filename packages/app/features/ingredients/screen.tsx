import type {
  ColorTokens,
} from '@repo/ui';
import type { IconProps } from '@tamagui/helpers-icon';
import type { NamedExoticComponent } from 'react';
import {
  NativeScrollView,
  SizableText,
  SwitchThemeButton,
  XStack,
  YStack,
} from '@repo/ui';
import {
  AlertTriangle,
  CheckCircle,
  Clipboard,
  Heart,
  Menu,
  Package,
  X,
} from '@tamagui/lucide-icons';
import { Section } from './components';

type SectionData = {
  actionText: string;
  items: {
    description: string;
    icon: NamedExoticComponent<IconProps>;
    iconBg: ColorTokens;
    iconColor?: ColorTokens;
    title: string;
  }[];
  onAction?: () => void;
  title: string;
};

const sections: SectionData[] = [
  {
    actionText: 'View All',
    items: [
      {
        description: '500g • Expires in 3 days',
        icon: Package,
        iconBg: '$primaryOpacity',
        title: 'Chicken Breast',
      },
      {
        description: '1kg • Expires in 30 days',
        icon: Package,
        iconBg: '$primaryOpacity',
        title: 'Brown Rice',
      },
      {
        description: '2kg • Expires in 7 days',
        icon: Package,
        iconBg: '$primaryOpacity',
        title: 'Potatoes',
      },
      {
        description: '300g • Expires in 5 days',
        icon: Package,
        iconBg: '$primaryOpacity',
        title: 'Cheese',
      },
      {
        description: '6 units • Expires in 10 days',
        icon: Package,
        iconBg: '$primaryOpacity',
        title: 'Eggs',
      },
    ],
    title: 'Home Ingredients',
  },
  {
    actionText: 'Edit',
    items: [
      {
        description: 'Peanuts, Shellfish',
        icon: X,
        iconBg: '$redOpacity',
        iconColor: '$red',
        title: 'Allergies',
      },
      {
        description: 'Vegetarian',
        icon: AlertTriangle,
        iconBg: '$yellowOpacity',
        iconColor: '$yellow',
        title: 'Dietary Restrictions',
      },
      {
        description: 'Lactose Intolerance',
        icon: X,
        iconBg: '$redOpacity',
        iconColor: '$red',
        title: 'Intolerances',
      },
    ],
    title: 'Food Restrictions',
  },
  {
    actionText: 'Edit',
    items: [
      {
        description: 'Italian, Mexican, Japanese',
        icon: Heart,
        iconBg: '$greenOpacity',
        iconColor: '$green',
        title: 'Favorite Cuisines',
      },
      {
        description: 'Intermediate',
        icon: CheckCircle,
        iconBg: '$blueOpacity',
        iconColor: '$blue',
        title: 'Cooking Level',
      },
      {
        description: 'Chicken, Rice, Pasta',
        icon: Heart,
        iconBg: '$greenOpacity',
        iconColor: '$green',
        title: 'Favorite Ingredients',
      },
      {
        description: '30 minutes',
        icon: CheckCircle,
        iconBg: '$blueOpacity',
        iconColor: '$blue',
        title: 'Cooking Time Preference',
      },
    ],
    title: 'Food Preferences',
  },
  {
    actionText: 'Add Item',
    items: [
      {
        description: 'Tomatoes, Lettuce, Carrots',
        icon: Clipboard,
        iconBg: '$purpleOpacity',
        iconColor: '$purple',
        title: 'Fresh Vegetables',
      },
      {
        description: 'Pasta, Olive Oil, Spices',
        icon: Clipboard,
        iconBg: '$purpleOpacity',
        iconColor: '$purple',
        title: 'Pantry Items',
      },
      {
        description: 'Milk, Yogurt, Cream',
        icon: Clipboard,
        iconBg: '$purpleOpacity',
        iconColor: '$purple',
        title: 'Dairy Products',
      },
      {
        description: 'Chicken, Beef, Fish',
        icon: Clipboard,
        iconBg: '$purpleOpacity',
        iconColor: '$purple',
        title: 'Protein',
      },
      {
        description: 'Apples, Bananas, Oranges',
        icon: Clipboard,
        iconBg: '$purpleOpacity',
        iconColor: '$purple',
        title: 'Fresh Fruits',
      },
      {
        description: 'Water, Juice, Coffee',
        icon: Clipboard,
        iconBg: '$purpleOpacity',
        iconColor: '$purple',
        title: 'Beverages',
      },
    ],
    title: 'Grocery List',
  },

];

export const IngredientsScreen = () => (
  <NativeScrollView>
    <YStack flex={1} px={24} py={32} bg="$bg1" gap="$6">
      <XStack justify="space-between" items="center">
        <SizableText size="$h1">Ingredientes</SizableText>
        <XStack gap="$4" items="center">
          <SwitchThemeButton />
          <Menu size={24} color="$text1" />
        </XStack>
      </XStack>

      {sections.map(section => (
        <Section
          key={section.title}
          title={section.title}
          actionText={section.actionText}
          items={section.items}
          onAction={section.onAction}
        />
      ))}
    </YStack>
  </NativeScrollView>
);
