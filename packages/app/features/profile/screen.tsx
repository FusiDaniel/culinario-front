import type { IconProps } from '@tamagui/helpers-icon';
import type { NamedExoticComponent, ReactNode } from 'react';
import {
  Button,
  Image,
  NativeScrollView,
  SizableText,
  SwitchThemeButton,
  View,
  XStack,
  YStack,
} from '@repo/ui';
import {
  Bell,
  Camera,
  ChevronDown,
  HelpCircle,
  KeyRound,
  Mail,
  Menu,
  Shield,
  User,
} from '@tamagui/lucide-icons';
import { Fragment } from 'react';
import { ProfileItem, ProfileSection, SelectItem } from './components';

type MockSelectProps = { value: string };

const MockSelect = ({ value }: MockSelectProps) => (
  <XStack
    bg="$bg2"
    px="$3"
    py="$2"
    rounded={12}
    borderWidth={1}
    borderColor="$text2"
    items="center"
    justify="space-between"
  >
    <SizableText size="$body2" color="$text2">{value}</SizableText>
    <ChevronDown size={16} color="$text2" />
  </XStack>
);

type SectionData = {
  items: {
    Icon?: NamedExoticComponent<IconProps>;
    onPress?: () => void;
    rightElement?: ReactNode;
    selectValue?: string;
    title: string;
    type?: 'select';
  }[];
  title: string;
};

const sections: SectionData[] = [
  {
    items: [
      {
        Icon: User,
        title: 'Edit Profile',
      },
      {
        Icon: KeyRound,
        title: 'Change Password',
      },
      {
        Icon: Bell,
        title: 'Notifications',
      },
    ],
    title: 'Account Settings',
  },
  {
    items: [
      {
        rightElement: <MockSelect value="English" />,
        selectValue: 'English',
        title: 'Language',
        type: 'select',
      },
      {
        rightElement: <MockSelect value="System Default" />,
        selectValue: 'System Default',
        title: 'Theme',
        type: 'select',
      },
    ],
    title: 'Preferences',
  },
  {
    items: [
      {
        Icon: HelpCircle,
        title: 'Help Center',
      },
      {
        Icon: Mail,
        title: 'Contact Us',
      },
      {
        Icon: Shield,
        title: 'Privacy Policy',
      },
    ],
    title: 'Support',
  },
];

export const ProfileScreen = () => (
  <NativeScrollView>
    <YStack flex={1} px={24} py={32} bg="$bg1" gap={20}>
      <XStack justify="space-between" items="center">
        <SizableText size="$h1">Perfil</SizableText>
        <XStack gap="$4" items="center">
          <SwitchThemeButton />
          <Menu size={20} color="$text1" />
        </XStack>
      </XStack>

      <Button href='/profile/test'>
        profile test
      </Button>

      <YStack bg="$bg2" p="$4" rounded={16}>
        <XStack gap="$4" items="center">
          <View position="relative">
            <Image
              source={{ uri: 'https://picsum.photos/96/96?random=1' }}
              width={96}
              height={96}
              borderRadius={48}
              objectFit="cover"
              alt="Profile"
            />
            <View
              position="absolute"
              b={0}
              r={0}
              bg="$bg2"
              p="$2"
              rounded={20}
              borderWidth={1}
              borderColor="$border"
            >
              <Camera size={20} color="$text2" />
            </View>
          </View>
          <YStack>
            <SizableText size="$h2" color="$text1">John Doe</SizableText>
            <SizableText size="$body2" color="$text2">john.doe@example.com</SizableText>
          </YStack>
        </XStack>
      </YStack>

      {sections.map(section => (
        <ProfileSection key={`section-${section.title}`} title={section.title}>
          {section.items.map((item, itemIndex) => {
            const Item = item.type === 'select' ? SelectItem : ProfileItem;
            return (
              <Fragment key={item.title}>
                {itemIndex > 0 && <YStack mx="$4" borderTopWidth={1} borderColor="$border" />}
                <Item {...item} />
              </Fragment>
            );
          })}
        </ProfileSection>
      ))}

      <Button bg="$redOpacity" color="$red" size="LG">
        Sign Out
      </Button>
    </YStack>
  </NativeScrollView>
);
