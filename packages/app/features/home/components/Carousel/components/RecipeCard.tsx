import type {
  YStackProps,
} from '@repo/ui';
import {
  Image,
  SizableText,
  XStack,
  YStack,
} from '@repo/ui';
import { Apple, Clock } from '@tamagui/lucide-icons';

type RecipeCardProps = {
  description: string;
  imageUrl: string;
  ingredientsCount: number;
  time: number;
  title: string;
} & YStackProps;

export const RecipeCard = ({
  description,
  imageUrl,
  ingredientsCount,
  time,
  title,
  ...rest
}: RecipeCardProps) => (
  <YStack
    width={280}
    bg="$bg2"
    overflow="hidden"
    rounded={16}
    borderWidth={1}
    borderColor="$border"
    {...rest}
  >
    <Image
      source={{ uri: imageUrl }}
      width="100%"
      height={160}
      objectFit="cover"
    />
    <YStack p="$4" flex={1} justify="space-between">
      <YStack>
        <SizableText size="$h2" color="$text1" numberOfLines={1} mb="$2">
          {title}
        </SizableText>
        <SizableText size="$body2" color="$text2" numberOfLines={2} mb="$4">
          {description}
        </SizableText>
      </YStack>
      <XStack gap="$4">
        <XStack gap="$1" items="center">
          <Clock size={16} color="$text2" />
          <SizableText size="$body3" color="$text2">
            {`${time}mins`}
          </SizableText>
        </XStack>
        <XStack gap="$1" items="center">
          <Apple size={16} color="$text2" />
          <SizableText size="$body3" color="$text2">
            {`${ingredientsCount} ingredientes`}
          </SizableText>
        </XStack>
      </XStack>
    </YStack>
  </YStack>
);
