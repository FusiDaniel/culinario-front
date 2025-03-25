import type { IconProps } from '@tamagui/helpers-icon';
import type { NamedExoticComponent } from 'react';
import type { ButtonProps as TButtonProps } from 'tamagui';
import type { SizeTokens } from './style';
import { useLink } from 'solito/navigation';
import { withStaticProperties } from 'tamagui';
import { ButtonFrame, ButtonIcon, ButtonText } from './style';

export type ButtonProps = Omit<TButtonProps, 'rounded' | 'size' | 'variant'> & {
  experimental?: {
    isNestedNavigator: boolean;
    nativeBehavior: 'stack-replace';
  } | {
    nativeBehavior?: undefined;
  };
  href?: string;
  leftIcon?: NamedExoticComponent<IconProps>;
  replace?: boolean;
  rightIcon?: NamedExoticComponent<IconProps>;
  rounded?: boolean;
  scroll?: boolean;
  size?: SizeTokens;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

const Btn = withStaticProperties(ButtonFrame, {
  Icon: ButtonIcon,
  Text: ButtonText,
});

export const Button = ({
  children,
  experimental,
  href = '',
  leftIcon: LeftIcon,
  replace,
  rightIcon: RightIcon,
  rounded = false,
  scroll,
  size = 'MD',
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  const linkProps = useLink({ experimental, href, replace, scroll });

  return (
    <Btn sizeStyle={size} variantStyle={variant} roundedStyle={rounded} {...href && linkProps} {...rest}>
      {LeftIcon && (
        <Btn.Icon>
          <LeftIcon />
        </Btn.Icon>
      )}
      {children && (
        <Btn.Text>
          {children}
        </Btn.Text>
      )}
      {RightIcon && (
        <Btn.Icon>
          <RightIcon />
        </Btn.Icon>
      )}
    </Btn>
  );
};
