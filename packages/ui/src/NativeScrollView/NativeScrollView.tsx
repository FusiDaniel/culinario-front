import type { ScrollViewProps } from 'tamagui';
import { ScrollView } from 'tamagui';

export const NativeScrollView = (props: ScrollViewProps) => <ScrollView flex={1} contentContainerStyle={{ grow: 1 }} {...props} />;
