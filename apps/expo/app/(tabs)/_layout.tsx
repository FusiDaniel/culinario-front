import type { ThemeTokens } from 'tamagui';
import { getTokens, NAVBAR_HEIGHT, SizableText, useTheme, YStack } from '@repo/ui';
import { Heart, Home, ListChecks, User } from '@tamagui/lucide-icons';
import { Tabs } from 'expo-router';

const TabLayout = () => {
  const theme = useTheme();
  const tokens = getTokens();
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: tokens.color.primary.val,
      tabBarButton: ({ children, style: _style, ...props }) => (
        // @ts-expect-error this is a workaround for the type error
        <YStack
          {...props}
          gap={4}
          flex={1}
          items="center"
          justify="center"
        >
          {children}
        </YStack>
      ),
      tabBarInactiveTintColor: theme.text2.val,
      tabBarLabel: ({ children, focused }) => (
        <SizableText
          color={focused ? '$primary' : '$text2'}
          size="$body2"
        >
          {children}
        </SizableText>
      ),
      tabBarStyle: {
        backgroundColor: theme.bg2.val,
        borderColor: theme.border.val,
        borderTopWidth: 1,
        elevation: 0, // Remove shadow on Android
        height: NAVBAR_HEIGHT,
        shadowOpacity: 0, // Remove shadow on iOS
        width: '100%',
      },
    }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          tabBarIcon: ({ color }) => <Home width={24} height={24} size={24} color={color as ThemeTokens} />,
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="ingredients/index"
        options={{
          tabBarIcon: ({ color }) => <ListChecks width={24} height={24} size={24} color={color as ThemeTokens} />,
          title: 'Ingredients',
        }}
      />
      <Tabs.Screen
        name="saved/index"
        options={{
          tabBarIcon: ({ color }) => <Heart width={24} height={24} size={24} color={color as ThemeTokens} />,
          title: 'Saved',
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          tabBarIcon: ({ color }) => <User width={24} height={24} size={24} color={color as ThemeTokens} />,
          title: 'Profile',
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
