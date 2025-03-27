import {
  H1,
  NativeScrollView,
  SizableText,
  SwitchThemeButton,
  XStack,
  YStack,
} from '@repo/ui';
import { Menu } from '@tamagui/lucide-icons';

export const ProfileScreen = () => (
  <NativeScrollView>
    <YStack flex={1} px={24} py={32} bg="$bg1" gap={20}>
      <XStack justify="space-between" items="center">
        <Menu />
        <SwitchThemeButton />
      </XStack>
      <H1 size='$h1'>Profile</H1>
      <YStack>
        {Array.from({ length: 100 }, (_, index) => (
          <SizableText key={index} size="$h1">
            {index + 1}
          </SizableText>
        ))}
      </YStack>
    </YStack>
  </NativeScrollView>
);
