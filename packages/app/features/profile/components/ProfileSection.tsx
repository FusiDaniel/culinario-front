import type { PropsWithChildren } from 'react';
import { SizableText, YStack } from '@repo/ui';

type ProfileSectionProps = PropsWithChildren<{ title: string }>;

export const ProfileSection = ({ children, title }: ProfileSectionProps) => (
  <YStack bg="$bg2" rounded={16}>
    <YStack py="$4" px="$6" borderBottomWidth={1} borderColor="$border">
      <SizableText size="$h2" color="$text1">{title}</SizableText>
    </YStack>
    {children}
  </YStack>
);
