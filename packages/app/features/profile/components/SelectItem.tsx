import type { ReactNode } from 'react';
import { SizableText, XStack, YStack } from '@repo/ui';

type SelectItemProps = {
  rightElement?: ReactNode;
  title: string;
};

export const SelectItem = ({ rightElement, title }: SelectItemProps) => (
  <YStack px="$6" py="$4">
    <XStack justify="space-between" items="center" mb="$2">
      <SizableText color="$text1">{title}</SizableText>
      {rightElement}
    </XStack>
  </YStack>
);
