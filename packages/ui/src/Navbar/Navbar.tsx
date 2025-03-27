import { usePathname } from '@repo/utils';
import { Heart, Home, ListChecks, User } from '@tamagui/lucide-icons';
import { memo } from 'react';
import { useLink } from 'solito/navigation';
import { SizableText, Stack, XStack } from 'tamagui';

type NavItemProps = {
  href: string;
  icon: typeof Home;
  isActive?: boolean;
  label: string;
};

export const NAVBAR_HEIGHT = 70;

const NavItem = ({ href, icon: Icon, isActive, label }: NavItemProps) => {
  const linkProps = useLink({ href });

  return (
    <Stack items="center" flexBasis={0} grow={1} justify="center" gap={4} {...linkProps}>
      <Icon
        width={24}
        height={24}
        size={24}
        color={isActive ? '$primary' : '$text2'}
      />
      <SizableText
        size="$body3"
        color={isActive ? '$primary' : '$text2'}
      >
        {label}
      </SizableText>
    </Stack>
  );
};

const NavbarComponent = () => {
  const pathname = usePathname();
  const active = pathname.split('/')[1] || 'home';
  return (
    <XStack
      width="100%"
      height={NAVBAR_HEIGHT}
      bg="$bg2"
    >
      <NavItem
        icon={Home}
        label="Home"
        href="/"
        isActive={active === 'home'}
      />
      <NavItem
        icon={ListChecks}
        label="Ingredients"
        href="/ingredients"
        isActive={active === 'ingredients'}
      />
      <NavItem
        icon={Heart}
        label="Saved"
        href="/saved"
        isActive={active === 'saved'}
      />
      <NavItem
        icon={User}
        label="Profile"
        href="/profile"
        isActive={active === 'profile'}
      />
    </XStack>
  );
};

export const Navbar = memo(NavbarComponent);
