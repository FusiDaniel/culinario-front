import {
  NativeScrollView,
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
    </YStack>
  </NativeScrollView>
);
