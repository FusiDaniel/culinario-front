import {
  Button,
  Input,
  Spinner,
  XStack,
} from '@repo/ui';
import {
  ArrowLeftRight,
  Mic,
  Search,
} from '@tamagui/lucide-icons';
import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

type IngredientsInputProps = {
  disableSendButton?: boolean;
  isPending?: boolean;
  model: string;
  mutate: () => void;
  setModel: (model: 'gemma3' | 'llama3') => void;
  setText: (text: string) => void;
  text: string;
};

const HEIGHT = 50;

export const IngredientsInput = ({ disableSendButton, isPending, model, mutate, setModel, setText, text }: IngredientsInputProps) => {
  const { listening, resetTranscript, transcript } = useSpeechRecognition();

  useEffect(() => {
    setText(transcript);
  }, [transcript, setText]);

  const handleSpeechRecognition = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    }
    else {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true, language: 'pt-BR' });
    }
  };

  const handleSendButtonPress = () => {
    mutate();
    if (listening) {
      SpeechRecognition.stopListening();
    }
  }

  return (
    <XStack gap="$1">
      <Button
        height={HEIGHT}
        width={120}
        onPress={() => setModel(model === 'gemma3' ? 'llama3' : 'gemma3')}
        borderTopLeftRadius={12}
        borderBottomLeftRadius={12}
        borderTopRightRadius={4}
        borderBottomRightRadius={4}
        items="center"
        justify="center"
        borderWidth={1}
        borderColor="$border"
        leftIcon={ArrowLeftRight}
        variant="secondary"
      >
        {model}
      </Button>
      <XStack
        flex={1}
        bg="$bg2"
        borderTopLeftRadius={4}
        borderBottomLeftRadius={4}
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
          placeholder="Digite sua lista de ingredientes"
          px={44}
          height={HEIGHT}
          borderTopLeftRadius={4}
          borderWidth={1}
          borderColor="$border"
          borderBottomLeftRadius={4}
          borderTopRightRadius={4}
          borderBottomRightRadius={4}
          $platform-web={{ focusVisibleStyle: { borderColor: 'transparent', outlineColor: '$focusOutline', outlineOffset: -1 } }}
          $platform-native={{ focusStyle: { borderColor: '$focusOutline', borderWidth: 2 } }}
          onChangeText={setText}
          value={text}
          disabled={isPending}
        />
        <Button
          onPress={handleSpeechRecognition}
          circular
          position="absolute"
          r="$4"
          unstyled
        >
          <Mic size={20} color={listening ? '$primary' : '$text2'} />
        </Button>
      </XStack>
      <Button
        height={HEIGHT}
        width={120}
        borderTopLeftRadius={4}
        borderBottomLeftRadius={4}
        borderTopRightRadius={12}
        borderBottomRightRadius={12}
        items="center"
        justify="center"
        borderWidth={1}
        borderColor="$border"
        onPress={handleSendButtonPress}
        disabled={disableSendButton}
      >
        {isPending ? <Spinner size="small" color="$text1" /> : 'Enviar'}
      </Button>
    </XStack>
  );
};
