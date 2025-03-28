import {
  NativeScrollView,
  SizableText,
  SwitchThemeButton,
  XStack,
  YStack,
} from '@repo/ui';
import { Menu } from '@tamagui/lucide-icons';
import { Carousel } from './components/Carousel';
import { DontKnowWhatToCook } from './components/DontKnowWhatToCook';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Shortcuts } from './components/Shortcuts';

export const HomeScreen = () => (
  <NativeScrollView>
    <YStack flex={1} py={32} bg="$bg1" gap="$6">
      <YStack flex={1} px={24} gap="$6">
        <XStack justify="space-between" items="center">
          <SizableText size="$h1">Início</SizableText>
          <XStack gap="$4" items="center">
            <SwitchThemeButton />
            <Menu />
          </XStack>
        </XStack>
        <SearchBar />
        <DontKnowWhatToCook />
        <Shortcuts />
      </YStack>
      <YStack flex={1} gap="$6">
        <Carousel title="Comidas Rápidas" />
        <Carousel title="Opções Saudáveis" />
        <Carousel title="Popular" />
      </YStack>
    </YStack>
  </NativeScrollView>
);
