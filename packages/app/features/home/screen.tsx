import {
  Button,
  H1,
  Input,
  SizableText,
  View,
  XStack,
  YStack,
} from '@repo/ui';
import { List, ListFilter, Menu, Search, Sparkles } from '@tamagui/lucide-icons';

export const HomeScreen = () => (
  <YStack flex={1} px={24} py={32} bg="$background" gap={20}>
    <XStack>
      <Menu />
    </XStack>
    <YStack>
      <H1 size="$h1" color="$primary">Culinário</H1>
      <SizableText size="$h1">O app para a sua cozinha!</SizableText>
    </YStack>
    <XStack gap={4}>
      <XStack
        flex={1}
        bg="$neutralLight"
        borderTopLeftRadius={12}
        borderBottomLeftRadius={12}
        borderTopRightRadius={4}
        borderBottomRightRadius={4}
        overflow="hidden"
        items="center"
        position="relative"
      >
        <Search
          size={24}
          width={24}
          height={24}
          color="$neutralDark"
          l={12}
          z={1}
          position="absolute"
          pointerEvents="none"
        />
        <Input
          color="black"
          bg="transparent"
          flex={1}
          height={48}
          borderWidth={0}
          placeholder="Busque uma receita"
          pl={48}
        />
      </XStack>
      <View
        height={48}
        width={48}
        bg="$neutralLight"
        borderTopLeftRadius={4}
        borderBottomLeftRadius={4}
        borderTopRightRadius={12}
        borderBottomRightRadius={12}
        items="center"
        justify="center"
      >
        <ListFilter size={24} width={24} height={24} color="$neutralDark" />
      </View>
    </XStack>
    <XStack justify="flex-end" gap={8}>
      <Button rounded leftIcon={List} variant="secondary" />
      <Button leftIcon={Sparkles}>
        Preciso de ideias
      </Button>
    </XStack>
    <View>
    </View>
    {/* <XStack
      position="absolute"
      width="100%"
      t="$6"
      gap="$6"
      justify="center"
      flexWrap="wrap"
      $sm={{ position: 'relative', t: 0 }}
    >
    </XStack>

    <YStack gap="$4">
      <H1 text="center" color="$color12" size="$h1">
        Welcome to Tamagui.
      </H1>
      <Paragraph color="$color10" text="center" size="$body1">
        Here's a basic starter to show navigating from one screen to another.
      </Paragraph>
      <Separator />
      <Paragraph text="center" size="$body1">
        This screen uses the same code on Next.js and React Native.
      </Paragraph>
      <Separator />
    </YStack>

    <XStack gap="$4" items="center">
      <Button size="SM" leftIcon={Move} rightIcon={SunMoon}>
        Test Button
      </Button>
      <Button size="MD" leftIcon={Move} rightIcon={SunMoon}>
        Test Button
      </Button>
      <Button size="LG" leftIcon={Move} rightIcon={SunMoon}>
        Test Button
      </Button>
    </XStack>

    <XStack gap="$4" items="center">
      <Button variant="secondary" size="SM" leftIcon={Move} rightIcon={SunMoon}>
        Test Button
      </Button>
      <Button variant="secondary" size="MD" leftIcon={Move} rightIcon={SunMoon}>
        Test Button
      </Button>
      <Button variant="secondary" size="LG" leftIcon={Move} rightIcon={SunMoon}>
        Test Button
      </Button>
    </XStack>

    <XStack gap="$4" items="center">
      <Button variant="tertiary" size="SM" leftIcon={Move} rightIcon={SunMoon}>
        Test Button
      </Button>
      <Button variant="tertiary" size="MD" leftIcon={Move} rightIcon={SunMoon}>
        Test Button
      </Button>
      <Button variant="tertiary" size="LG" leftIcon={Move} rightIcon={SunMoon}>
        Test Button
      </Button>
    </XStack>

    <Button href="/user/nate">
      <Paragraph text="center" size="$body1">
        Link to user
      </Paragraph>
    </Button> */}

  </YStack>
);
