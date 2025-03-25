import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
} from '@repo/ui';
import { ChevronDown, ChevronUp, Move, SunMoon } from '@tamagui/lucide-icons';
import { useState } from 'react';
import { useLink } from 'solito/navigation';

const SheetDemo = () => {
  const toast = useToastController();

  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);

  return (
    <>
      <Button
        size="MD"
        leftIcon={open ? ChevronDown : ChevronUp}
        onPress={() => setOpen(x => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay
          bg="$shadow4"
          animation="lazy"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Handle bg="$color8" />
        <Sheet.Frame items="center" justify="center" gap="$10" bg="$color2">
          <XStack gap="$2">
            <Paragraph text="center">Made by</Paragraph>
            <Anchor color="$accent6" href="https://twitter.com/natebirdman" target="_blank">
              @natebirdman,
            </Anchor>
            <Anchor
              color="$accent6"
              href="https://github.com/tamagui/tamagui"
              target="_blank"
              rel="noreferrer"
            >
              give it a ⭐️
            </Anchor>
          </XStack>

          <Button
            size="MD"
            leftIcon={ChevronDown}
            onPress={() => {
              setOpen(false);
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              });
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  );
};

export const HomeScreen = ({ pagesMode = false }: { pagesMode?: boolean }) => {
  const linkTarget = pagesMode ? '/pages-example-user' : '/user';
  const linkProps = useLink({
    href: `${linkTarget}/nate`,
  });

  return (
    <YStack flex={1} justify="center" items="center" gap="$8" p="$4" bg="$background">
      <XStack
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

      <Button {...linkProps}>
        <Paragraph text="center" size="$body1">
          Link to user
        </Paragraph>
      </Button>

      <SheetDemo />
    </YStack>
  );
};
