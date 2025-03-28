/* eslint-disable perfectionist/sort-objects */
import type { JSXElementConstructor, ReactElement } from 'react';
import type { ColorTokens } from 'tamagui';
import { cloneElement, useContext } from 'react';
import { createStyledContext, SizableText, styled, XStack } from 'tamagui';

export type SizeTokens = 'LG' | 'MD' | 'SM';

export type Variants = 'primary' | 'secondary' | 'tertiary' | 'text' | 'unstyled';

type ButtonContextType = {
  roundedStyle?: boolean;
  sizeStyle: SizeTokens;
  variantStyle: Variants;
};

export const ButtonContext = createStyledContext<ButtonContextType>({
  sizeStyle: 'MD',
  variantStyle: 'primary',
  roundedStyle: false,
});

export const ButtonFrame = styled(XStack, {
  cursor: 'pointer',
  name: 'Button',
  context: ButtonContext,
  items: 'center',
  justify: 'center',
  rounded: '$3',
  px: '$4',
  gap: '$2',
  variants: {
    roundedStyle: {
      true: (_, { props }) => {
        const { sizeStyle } = props as ButtonContextType;
        const sizes = {
          SM: 32,
          MD: 40,
          LG: 48,
        };
        return {
          height: sizes[sizeStyle],
          width: sizes[sizeStyle],
          px: 0,
        };
      },
      false: {},
    },
    sizeStyle: {
      SM: { height: 32 },
      MD: { height: 40 },
      LG: { height: 48 },
    },
    variantStyle: {
      primary: {
        bg: '$primary',
        hoverStyle: { bg: '$primaryLight' },
        pressStyle: { bg: '$primaryDark' },
      },
      secondary: {
        borderWidth: 1,
        borderColor: '$border',
        hoverStyle: { borderColor: '$border' },
        pressStyle: { borderColor: '$border' },
      },
      tertiary: {
        bg: '$secundary',
        hoverStyle: { bg: '$secundaryLight' },
        pressStyle: { bg: '$secundaryDark' },
      },
      text: {
        items: 'unset',
        justify: 'unset',
        rounded: 0,
        px: 0,
        gap: 0,
        height: 'unset'
      },
    },
  } as const,
});

export const ButtonText = styled(SizableText, {
  name: 'ButtonText',
  context: ButtonContext,
  color: 'white',
  select: 'none',
  size: '$body1',
  variants: {
    variantStyle: {
      primary: {
        color: 'white',
      },
      secondary: {
        color: '$text1',
      },
      tertiary: {
        color: 'white',
      },
      text: {
        color: '$text1',
      },
      unstyled: {
        color: '$text1',
      },
    },
  } as const,
});

const iconSizeStyle = {
  SM: 16,
  MD: 20,
  LG: 20,
};

const iconVariantColorStyle = {
  primary: 'white',
  secondary: '$text1',
  tertiary: 'white',
  text: '$text1',
  unstyled: '$text1',
};

export const ButtonIcon = ({ children, color }: { children: ReactElement<any, JSXElementConstructor<any>>; color?: ColorTokens }) => {
  const { sizeStyle, variantStyle } = useContext<ButtonContextType>(ButtonContext);

  if (!children)
    return null;

  // eslint-disable-next-line react/no-clone-element
  return cloneElement(children, {
    width: iconSizeStyle[sizeStyle],
    height: iconSizeStyle[sizeStyle],
    size: iconSizeStyle[sizeStyle],
    color: color ?? iconVariantColorStyle[variantStyle],
  });
};
