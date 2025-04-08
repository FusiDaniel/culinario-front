import { Button, Input, YStack } from '@repo/ui';
import { useForm } from '@tanstack/react-form';
import axios from 'axios';

type SignInFormValues = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    } as SignInFormValues,
    onSubmit: async ({ value }) => {
      const response = await axios.post('/api/sign-in', {
        password: value.password,
        username: value.email,
      });
    },
  });

  return (
    <form
      onSubmit={form.handleSubmit}
    >
      <YStack gap="$2">
        <form.Field
          name="email"
          children={field => (
            <Input
              height={50}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="emailAddress"
              onBlur={field.handleBlur}
              onChange={e => field.handleChange(e.nativeEvent.text)}
              value={field.state.value}
            />
          )}
        />
        <form.Field
          name="password"
          children={field => (
            <Input
              height={50}
              placeholder="Senha"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              onBlur={field.handleBlur}
              onChange={e => field.handleChange(e.nativeEvent.text)}
              value={field.state.value}
              onKeyPress={(e) => {
                if (e.nativeEvent.key === 'Enter') {
                  form.handleSubmit();
                }
              }}
            />
          )}
        />
        <form.Subscribe
          children={state => (
            <Button
              width="100%"
              onPress={form.handleSubmit}
              disabled={!state.isValid}
            >
              Enviar
            </Button>
          )}
        />
      </YStack>
    </form>
  );
};
