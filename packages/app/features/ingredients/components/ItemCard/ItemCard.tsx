import type { ColorTokens } from '@repo/ui';
import type { IconProps } from '@tamagui/helpers-icon';
import type { NamedExoticComponent } from 'react';
import { SizableText, View, XStack, YStack } from '@repo/ui';

type ItemCardProps = {
  description: string;
  icon: NamedExoticComponent<IconProps>;
  iconBg: ColorTokens;
  iconColor?: ColorTokens;
  title: string;
};

export const ItemCard = ({ description, icon: Icon, iconBg, iconColor = '$primary', title }: ItemCardProps) => (
  <XStack items="center" justify="space-between">
    <XStack items="center" gap="$3">
      <View bg={iconBg} p="$2" rounded={8}>
        <Icon size={24} color={iconColor} />
      </View>
      <YStack>
        <SizableText size="$body1" color="$text1">{title}</SizableText>
        <SizableText size="$body2" color="$text2">{description}</SizableText>
      </YStack>
    </XStack>
  </XStack>
);
