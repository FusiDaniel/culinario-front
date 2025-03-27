import { Input, View, XStack } from '@repo/ui';
import { ListFilter, Search } from '@tamagui/lucide-icons';

const HEIGHT = 50;

export const SearchBar = () => {
  const aaa = 123;
  return (
    <XStack gap={4}>
      <XStack
        flex={1}
        bg="$bg2"
        borderTopLeftRadius={12}
        borderBottomLeftRadius={12}
        borderTopRightRadius={4}
        borderBottomRightRadius={4}
        items="center"
        position="relative"
      >
        <Search
          size={20}
          color="$text2"
          l={12}
          z={1}
          position="absolute"
          pointerEvents="none"
        />
        <Input
          color="$text1"
          flex={1}
          bg="transparent"
          placeholder="Busque uma receita"
          pl={44}
          height={HEIGHT}
          borderTopLeftRadius={12}
          borderWidth={1}
          borderColor="$border"
          borderBottomLeftRadius={12}
          borderTopRightRadius={4}
          borderBottomRightRadius={4}
          $platform-web={{ focusVisibleStyle: { borderColor: 'transparent', outlineColor: '$focusOutline', outlineOffset: -1 } }}
          $platform-native={{ focusStyle: { borderColor: '$focusOutline', borderWidth: 2 } }}
        />
      </XStack>
      <View
        height={HEIGHT}
        width={HEIGHT}
        bg="$bg2"
        borderTopLeftRadius={4}
        borderBottomLeftRadius={4}
        borderTopRightRadius={12}
        borderBottomRightRadius={12}
        items="center"
        justify="center"
        borderWidth={1}
        borderColor="$border"
      >
        <ListFilter size={20} color="$text2" />
      </View>
    </XStack>
  );
};
