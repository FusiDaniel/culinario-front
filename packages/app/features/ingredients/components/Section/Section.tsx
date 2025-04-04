import type { ColorTokens } from '@repo/ui';
import type { IconProps } from '@tamagui/helpers-icon';
import type { NamedExoticComponent } from 'react';
import { Button, SizableText, XStack, YStack } from '@repo/ui';
import { ChevronRight } from '@tamagui/lucide-icons';
import { ItemCard } from '../ItemCard';

type ItemCardProps = {
  description: string;
  icon: NamedExoticComponent<IconProps>;
  iconBg: ColorTokens;
  iconColor?: ColorTokens;
  title: string;
};

type SectionProps = {
  actionText: string;
  href?: string;
  items: ItemCardProps[];
  onAction?: () => void;
  title: string;
};

export const Section = ({ actionText, href, items, onAction, title }: SectionProps) => {
  const visibleItems = items.slice(0, 2);
  const remainingCount = items.length - 2;

  return (
    <YStack>
      <XStack justify="space-between" items="center" mb="$4">
        <SizableText size="$h2" color="$text1">{title}</SizableText>
        <Button
          variant="text"
          color="$primary"
          px={0}
          href={href}
          onPress={onAction}
        >
          {actionText}
        </Button>
      </XStack>
      <YStack bg="$bg2" p="$4" rounded={16}>
        <YStack gap="$3">
          {visibleItems.map(item => (
            <ItemCard
              key={`item-${item.title}`}
              icon={item.icon}
              title={item.title}
              description={item.description}
              iconBg={item.iconBg}
              iconColor={item.iconColor}
            />
          ))}
          {remainingCount > 0 && (
            <XStack items="center" gap="$2" pt="$2" borderTopWidth={1} borderColor="$border">
              <SizableText size="$body2" color="$text2">
                {`+ ${remainingCount} more items`}
              </SizableText>
              <ChevronRight size={16} color="$text2" />
            </XStack>
          )}
        </YStack>
      </YStack>
    </YStack>
  );
};
