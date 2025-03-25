import { Button, Paragraph, YStack } from '@repo/ui';
import { ChevronLeft } from '@tamagui/lucide-icons';
import { useRouter } from 'solito/navigation';

export const UserDetailScreen = ({ id }: { id: string }) => {
  const router = useRouter();
  if (!id) {
    return null;
  }
  return (
    <YStack
      flex={1}
      justify="center"
      items="center"
      gap="$4"
      bg="$background"
    >
      <Paragraph
        verticalAlign="center"
        size="$body1"
        color="$neutralBase"
      >
        {`User ID: ${id}`}
      </Paragraph>
      <Button
        icon={ChevronLeft}
        onPress={() => router.back()}
      >
        Go Home
      </Button>
    </YStack>
  );
};
