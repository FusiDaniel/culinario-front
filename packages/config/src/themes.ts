import * as Colors from '@tamagui/colors';
import { createThemes, defaultComponentThemes } from '@tamagui/theme-builder';

const darkPalette = [
  'hsla(0, 0%, 6%, 1)',
  'hsla(0, 0%, 11%, 1)',
  'hsla(0, 0%, 16%, 1)',
  'hsla(0, 0%, 21%, 1)',
  'hsla(0, 0%, 26%, 1)',
  'hsla(0, 0%, 30%, 1)',
  'hsla(0, 0%, 35%, 1)',
  'hsla(0, 0%, 40%, 1)',
  'hsla(0, 0%, 45%, 1)',
  'hsla(0, 0%, 50%, 1)',
  'hsla(0, 15%, 93%, 1)',
  'hsla(0, 15%, 99%, 1)',
];
const lightPalette = [
  'hsla(0, 0%, 99%, 1)',
  'hsla(0, 0%, 94%, 1)',
  'hsla(0, 0%, 88%, 1)',
  'hsla(0, 0%, 83%, 1)',
  'hsla(0, 0%, 77%, 1)',
  'hsla(0, 0%, 72%, 1)',
  'hsla(0, 0%, 66%, 1)',
  'hsla(0, 0%, 61%, 1)',
  'hsla(0, 0%, 55%, 1)',
  'hsla(0, 0%, 50%, 1)',
  'hsla(0, 15%, 15%, 1)',
  'hsla(0, 15%, 1%, 1)',
];

const lightShadows = {
  shadow1: 'hsla(0, 0%, 0%, 0.04)',
  shadow2: 'hsla(0, 0%, 0%, 0.08)',
  shadow3: 'hsla(0, 0%, 0%, 0.16)',
  shadow4: 'hsla(0, 0%, 0%, 0.24)',
  shadow5: 'hsla(0, 0%, 0%, 0.32)',
  shadow6: 'hsla(0, 0%, 0%, 0.4)',
};

const darkShadows = {
  shadow1: 'hsla(0, 0%, 0%, 0.2)',
  shadow2: 'hsla(0, 0%, 0%, 0.3)',
  shadow3: 'hsla(0, 0%, 0%, 0.4)',
  shadow4: 'hsla(0, 0%, 0%, 0.5)',
  shadow5: 'hsla(0, 0%, 0%, 0.6)',
  shadow6: 'hsla(0, 0%, 0%, 0.7)',
};

const builtThemes = createThemes({
  accent: {
    palette: {
      dark: [
        'hsla(81, 70%, 40%, 1)',
        'hsla(81, 70%, 42%, 1)',
        'hsla(81, 70%, 44%, 1)',
        'hsla(81, 70%, 47%, 1)',
        'hsla(81, 70%, 49%, 1)',
        'hsla(81, 70%, 51%, 1)',
        'hsla(81, 70%, 53%, 1)',
        'hsla(81, 70%, 56%, 1)',
        'hsla(81, 70%, 58%, 1)',
        'hsla(81, 70%, 60%, 1)',
        'hsla(250, 50%, 90%, 1)',
        'hsla(250, 50%, 95%, 1)',
      ],
      light: [
        'hsla(81, 70%, 43%, 1)',
        'hsla(81, 70%, 45%, 1)',
        'hsla(81, 70%, 48%, 1)',
        'hsla(81, 70%, 50%, 1)',
        'hsla(81, 70%, 53%, 1)',
        'hsla(81, 70%, 55%, 1)',
        'hsla(81, 70%, 58%, 1)',
        'hsla(81, 70%, 60%, 1)',
        'hsla(81, 70%, 63%, 1)',
        'hsla(81, 70%, 65%, 1)',
        'hsla(250, 50%, 95%, 1)',
        'hsla(250, 50%, 95%, 1)',
      ],
    },
  },

  base: {
    extra: {
      dark: {
        background: 'hsla(0, 0%, 18%, 1)',
        bg1: 'hsla(0, 0%, 18%, 1)',
        bg2: 'hsla(0, 0%, 24%, 1)',
        border: 'hsla(0, 0%, 30%, 1)',
        focusOutline: 'hsla(81, 70%, 40%, 0.3)',
        text1: 'hsla(220, 13%, 91%, 1)',
        text2: 'hsla(215, 16%, 65%, 1)',
        text3: 'hsla(220, 13%, 91%, 1)',
        ...darkShadows,
        shadowColor: darkShadows.shadow1,
      },
      light: {
        background: 'hsla(48, 50%, 95%, 1)',
        bg1: 'hsla(48, 50%, 95%, 1)',
        bg2: 'hsla(0, 0%, 100%, 1)',
        border: 'hsla(210, 20%, 96%, 1)',
        focusOutline: 'hsla(81, 70%, 40%, 0.3)',
        text1: 'hsla(222, 47%, 17%, 1)',
        text2: 'hsla(220, 9%, 46%, 1)',
        text3: 'hsla(215, 16%, 65%, 1)',
        ...lightShadows,
        shadowColor: lightShadows.shadow1,
      },
    },

    palette: {
      dark: darkPalette,
      light: lightPalette,
    },
  },

  childrenThemes: {
    error: {
      palette: {
        dark: Object.values(Colors.redDark),
        light: Object.values(Colors.red),
      },
    },

    success: {
      palette: {
        dark: Object.values(Colors.greenDark),
        light: Object.values(Colors.green),
      },
    },

    warning: {
      palette: {
        dark: Object.values(Colors.yellowDark),
        light: Object.values(Colors.yellow),
      },
    },
  },

  componentThemes: defaultComponentThemes,
});

export type Themes = typeof builtThemes;

// the process.env conditional here is optional but saves web client-side bundle
// size by leaving out themes JS. tamagui automatically hydrates themes from CSS
// back into JS for you, and the bundler plugins set TAMAGUI_ENVIRONMENT. so
// long as you are using the Vite, Next, Webpack plugins this should just work,
// but if not you can just export builtThemes directly as themes:
export const themes: Themes
  = process.env.TAMAGUI_ENVIRONMENT === 'client'
    && process.env.NODE_ENV === 'production'
    ? ({} as any)
    : (builtThemes as any);
