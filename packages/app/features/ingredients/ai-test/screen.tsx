import {
  Button,
  NativeScrollView,
  SizableText, SwitchThemeButton,
  View,
  XStack,
  YStack
} from '@repo/ui';
import {
  Menu,
} from '@tamagui/lucide-icons';
import { IngredientsInput } from './components/IngredientsInput';
import { useAiTest } from './useAiTest';

export const IngredientsAiTestScreen = () => {
  const { disableSendButton, foundIngredients, isPending, model, mutate, notFoundIngredients, reset, setModel, setText, text } = useAiTest();
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
        <IngredientsInput text={text} setText={setText} model={model} setModel={setModel} mutate={mutate} isPending={isPending} disableSendButton={disableSendButton} />

        <View self="flex-end">
          <Button onPress={reset} size="LG" variant="tertiary">Reset</Button>
        </View>

        <YStack gap="$2">
          <SizableText size="$h1">Found Ingredients:</SizableText>
          {foundIngredients.map(ingredient => (
            <SizableText key={ingredient} size="$body1" ml="$2">
              {`•  ${ingredient}`}
            </SizableText>
          ))}
          {foundIngredients.length === 0 && <SizableText size="$body1" ml="$2">Sem ingredientes encontrados</SizableText>}
        </YStack>

        <YStack gap="$2">
          <SizableText size="$h1">Not Found Ingredients:</SizableText>
          {notFoundIngredients.map(ingredient => (
            <SizableText key={ingredient} size="$body1" ml="$2">
              {`•  ${ingredient}`}
            </SizableText>
          ))}
          {notFoundIngredients.length === 0 && <SizableText size="$body1" ml="$2">Sem ingredientes não encontrados</SizableText>}
        </YStack>
      </YStack>
    </NativeScrollView>
  );
};
