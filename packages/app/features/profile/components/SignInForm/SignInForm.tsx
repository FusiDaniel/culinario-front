import { Button, Input, YStack } from '@repo/ui';
import { signIn } from '@repo/utils';
import { useForm } from '@tanstack/react-form';

type SignInFormValues = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const form = useForm({
    defaultValues: {
      email: 'user1@gmail.com',
      password: 'User123@',
    } as SignInFormValues,
    onSubmit: async ({ value }) => {
      const { error } = await signIn(value.email, value.password);
      if (error)
        console.log(error);
    },
  });

  return (

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
  );
};
