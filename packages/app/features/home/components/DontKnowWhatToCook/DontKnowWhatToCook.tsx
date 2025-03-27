import { Button, SizableText, YStack } from '@repo/ui';
import { Clipboard } from '@tamagui/lucide-icons';

export const DontKnowWhatToCook = () => (
  <YStack p="$4" rounded={16} bg="$primary">
    <SizableText size="$h1" color="$lightText" mb="$2">
      Não sabe o que cozinhar?
    </SizableText>
    <SizableText size="$body1" color="$lightText" mb="$4">
      Deixa a gente te ajudar a encontrar a receita perfeita usando os ingredientes que você já tem em casa
    </SizableText>
    <Button href="/ingredients" variant="secondary" self="flex-start" leftIcon={Clipboard} borderColor="$lightText" color="$lightText">
      Conferir meus ingredientes
    </Button>
  </YStack>
);
