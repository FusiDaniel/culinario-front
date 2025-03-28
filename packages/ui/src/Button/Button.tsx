import type { IconProps } from '@tamagui/helpers-icon';
import type { NamedExoticComponent } from 'react';
import type { ColorTokens, ButtonProps as TButtonProps } from 'tamagui';
import type { SizeTokens } from './style';
import { useLink } from 'solito/navigation';
import { View, withStaticProperties } from 'tamagui';
import { ButtonFrame, ButtonIcon, ButtonText } from './style';

export type ButtonProps = Omit<TButtonProps, 'rounded' | 'size' | 'variant'> & {
  color?: ColorTokens;
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
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text' | 'unstyled';
};

const Btn = withStaticProperties(ButtonFrame, {
  Icon: ButtonIcon,
  Text: ButtonText,
});

export const Button = ({
  children,
  color,
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
  const baseLinkProps = useLink({ experimental, href, replace, scroll });
  const linkProps = {
    ...baseLinkProps,
    '$platform-web': { textDecoration: 'none' },
    'tag': 'a',
  };

  if (variant === 'unstyled') {
    return (
      <View {...href && linkProps} {...rest}>
        {children}
      </View>
    );
  }

  return (
    <Btn
      sizeStyle={size}
      variantStyle={variant}
      roundedStyle={rounded}
      {...href && linkProps}
      {...rest}
      $platform-web={{ ...href && linkProps['$platform-web'], ...rest['$platform-web'] }}
    >
      {LeftIcon && (
        <Btn.Icon color={color}>
          <LeftIcon />
        </Btn.Icon>
      )}
      {children && (
        <Btn.Text color={color}>
          {children}
        </Btn.Text>
      )}
      {RightIcon && (
        <Btn.Icon color={color}>
          <RightIcon />
        </Btn.Icon>
      )}
    </Btn>
  );
};
