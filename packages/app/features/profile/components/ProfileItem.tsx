import type { IconProps } from '@tamagui/helpers-icon';
import type { NamedExoticComponent, ReactNode } from 'react';
import { Button, SizableText, XStack } from '@repo/ui';
import { ChevronRight } from '@tamagui/lucide-icons';

type ProfileItemProps = {
  Icon?: NamedExoticComponent<IconProps>;
  onPress?: () => void;
  rightElement?: ReactNode;
  title: string;
};

export const ProfileItem = ({ Icon, onPress, rightElement, title }: ProfileItemProps) => (
  <Button unstyled width="100%" py="$4" px="$6" onPress={onPress}>
    <XStack width="100%" justify="space-between" items="center">
      <XStack gap="$3" items="center">
        {Icon && <Icon size={20} color="$text2" />}
        <SizableText color="$text1">{title}</SizableText>
      </XStack>
      {rightElement ?? <ChevronRight size={20} color="$text2" />}
    </XStack>
  </Button>
);
