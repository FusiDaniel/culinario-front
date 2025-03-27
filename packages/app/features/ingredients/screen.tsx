import {
  NativeScrollView,
  SizableText,
  SwitchThemeButton,
  XStack,
  YStack,
} from '@repo/ui';
import { Menu } from '@tamagui/lucide-icons';

export const IngredientsScreen = () => (
  <NativeScrollView>
    <YStack flex={1} px={24} py={32} bg="$bg1" gap={20}>
      <XStack justify="space-between" items="center">
        <SizableText size="$h1">Ingredientes</SizableText>
        <XStack gap="$4" items="center">
          <SwitchThemeButton />
          <Menu />
        </XStack>
      </XStack>
      <YStack>
        {Array.from({ length: 11 }, (_, index) => (
          <SizableText key={index} size="$h1">
            {index + 1}
          </SizableText>
        ))}
      </YStack>
    </YStack>
  </NativeScrollView>
);
