/* eslint-disable perfectionist/sort-objects */
import type { JSXElementConstructor, ReactElement } from 'react';
import { cloneElement, useContext } from 'react';
import { createStyledContext, SizableText, styled, View } from 'tamagui';

export type SizeTokens = 'LG' | 'MD' | 'SM';

export type Variants = 'primary' | 'secondary' | 'tertiary';

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

export const ButtonFrame = styled(View, {
  cursor: 'pointer',
  name: 'Button',
  context: ButtonContext,
  flexDirection: 'row',
  items: 'center',
  justify: 'center',
  rounded: 999,
  px: 12,
  gap: 8,
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
        borderColor: '$neutral',
        hoverStyle: { borderColor: '$neutralLight' },
        pressStyle: { borderColor: '$neutralDark' },
      },
      tertiary: {
        bg: '$secundary',
        hoverStyle: { bg: '$secundaryLight' },
        pressStyle: { bg: '$secundaryDark' },
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
        color: '$neutralBase',
      },
      tertiary: {
        color: 'white',
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
  secondary: '$neutral',
  tertiary: 'white',
};

export const ButtonIcon = ({ children }: { children: ReactElement<any, JSXElementConstructor<any>> }) => {
  const { sizeStyle, variantStyle } = useContext<ButtonContextType>(ButtonContext);

  if (!children)
    return null;

  // eslint-disable-next-line react/no-clone-element
  return cloneElement(children, {
    width: iconSizeStyle[sizeStyle],
    height: iconSizeStyle[sizeStyle],
    size: iconSizeStyle[sizeStyle],
    color: iconVariantColorStyle[variantStyle],
  });
};
