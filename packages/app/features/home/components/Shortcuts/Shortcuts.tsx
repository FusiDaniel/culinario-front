import { SizableText, View, XStack } from '@repo/ui';
import { Clipboard, Heart } from '@tamagui/lucide-icons';

export const Shortcuts = () => (
  <XStack gap="$4">
    <XStack gap="$3" p="$4" bg="$bg2" rounded={16} flex={1} items="center">
      <View justify="center" items="center" rounded={12} width={40} height={40} bg="$primaryOpacity">
        <Clipboard size={24} color="$primary" />
      </View>
      <SizableText flex={1} size="$body1">
        Meus Ingredientes
      </SizableText>
    </XStack>
    <XStack gap="$3" p="$4" bg="$bg2" rounded={16} flex={1} items="center">
      <View justify="center" items="center" rounded={12} width={40} height={40} bg="$primaryOpacity">
        <Heart size={24} color="$primary" />
      </View>
      <SizableText flex={1} size="$body1">
        Receias Salvas
      </SizableText>
    </XStack>
  </XStack>
);
