import { Image, SizableText, View, XStack, YStack } from '@repo/ui';
import { Apple, Clock, Heart } from '@tamagui/lucide-icons';

type RecipeCardProps = {
  description: string;
  image: string;
  ingredientsCount: number;
  time: number;
  title: string;
};

export const RecipeCard = ({ description, image, ingredientsCount, time, title }: RecipeCardProps) => (
  <XStack bg="$bg2" rounded={16} overflow="hidden">
    <View position="relative" width={128} shrink={0} borderTopRightRadius="$2" borderBottomRightRadius="$2" overflow="hidden">
      <Image
        source={{ uri: image }}
        width={128}
        height={128}
        objectFit="cover"
      />
      <View
        t="$2"
        r="$2"
        p="$2"
        position="absolute"
        bg="$bg2"
        rounded="$max"
        items="center"
        justify="center"
      >
        <Heart size={20} color="$primary" />
      </View>
    </View>
    <YStack p="$4" flex={1} justify="space-between">
      <YStack gap="$2" mb="$2">
        <SizableText size="$h2" color="$primary" numberOfLines={1}>{title}</SizableText>
        <SizableText size="$body1" color="$text1" numberOfLines={2}>{description}</SizableText>
      </YStack>
      <XStack gap="$4">
        <XStack gap="$1" items="center">
          <Clock size={16} color="$text2" />
          <SizableText size="$body2" color="$text2">
            {`${time}mins`}
          </SizableText>
        </XStack>
        <XStack gap="$1" items="center">
          <Apple size={16} color="$text2" />
          <SizableText size="$body2" color="$text2">
            {`${ingredientsCount} ingredientes`}
          </SizableText>
        </XStack>
      </XStack>
    </YStack>
  </XStack>
);
