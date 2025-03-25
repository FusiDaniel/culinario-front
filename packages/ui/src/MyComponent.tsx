import { styled, YStack } from 'tamagui';

export const MyComponent = styled(YStack, {
  bg: 'red',
  name: 'MyComponent',

  variants: {
    blue: {
      true: {
        bg: 'blue',
      },
    },
  } as const,
});
