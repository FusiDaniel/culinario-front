import {
  H1,
  NativeScrollView,
  SizableText,
  SwitchThemeButton,
  XStack,
  YStack,
} from '@repo/ui';
import { Menu } from '@tamagui/lucide-icons';
import { SearchBar } from './components/SearchBar/SearchBar';

export const HomeScreen = () => (
  <NativeScrollView>
    <YStack flex={1} px={24} py={32} bg="$bg1" gap={20}>
      <XStack justify="space-between" items="center">
        <Menu />
        <SwitchThemeButton />
      </XStack>
      <SearchBar />
      <H1 size='$h1'>Home</H1>
      <YStack>
        {Array.from({ length: 100 }, (_, index) => (
          <SizableText key={index} size="$body1">
            {index + 1}
            {' '}
            abcdefghijklmnopqrstuvwxyz
          </SizableText>
        ))}
      </YStack>
      <SizableText size="$body1">
        Maybe pirating old fonts isn't the issue people make it out to be.
        Yes, I'm aware now that it's pronounced "fu-ture-a," for some reason I thought that was just an alternate way to pronounce it. My bad.
      </SizableText>
    </YStack>
  </NativeScrollView>
);
