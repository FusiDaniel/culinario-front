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
  shadow1: 'rgba(0,0,0,0.04)',
  shadow2: 'rgba(0,0,0,0.08)',
  shadow3: 'rgba(0,0,0,0.16)',
  shadow4: 'rgba(0,0,0,0.24)',
  shadow5: 'rgba(0,0,0,0.32)',
  shadow6: 'rgba(0,0,0,0.4)',
};

const darkShadows = {
  shadow1: 'rgba(0,0,0,0.2)',
  shadow2: 'rgba(0,0,0,0.3)',
  shadow3: 'rgba(0,0,0,0.4)',
  shadow4: 'rgba(0,0,0,0.5)',
  shadow5: 'rgba(0,0,0,0.6)',
  shadow6: 'rgba(0,0,0,0.7)',
};

// we're adding some example sub-themes for you to show how they are done, "success" "warning", "error":

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
        neutral: 'hsla(0, 0%, 50%, 1)',
        neutralBase: 'hsla(0, 0%, 100%, 1)',
        neutralDark: 'hsla(0, 0%, 40%, 1)',
        neutralLight: 'hsla(0, 0%, 97%, 1)',
        neutralMid: 'hsla(0, 0%, 50%, 1)',
        neutralOposite: 'hsla(0, 0%, 0%, 1)',
        primary: 'hsla(81, 70%, 40%, 1)',
        primaryDark: 'hsla(81, 70%, 30%, 1)',
        primaryLight: 'hsla(81, 70%, 60%, 1)',
        secundary: 'hsla(240, 33%, 40%, 1)',
        secundaryDark: 'hsla(240, 33%, 30%, 1)',
        secundaryLight: 'hsla(240, 33%, 60%, 1)',
        ...darkShadows,
        shadowColor: darkShadows.shadow1,
      },
      light: {
        neutral: 'hsla(0, 0%, 50%, 1)',
        neutralBase: 'hsla(0, 0%, 0%, 1)',
        neutralDark: 'hsla(0, 0%, 40%, 1)',
        neutralLight: 'hsla(0, 0%, 97%, 1)',
        neutralMid: 'hsla(0, 0%, 50%, 1)',
        neutralOposite: 'hsla(0, 0%, 100%, 1)',
        primary: 'hsla(81, 70%, 40%, 1)',
        primaryDark: 'hsla(81, 70%, 30%, 1)',
        primaryLight: 'hsla(81, 70%, 60%, 1)',
        secundary: 'hsla(240, 33%, 40%, 1)',
        secundaryDark: 'hsla(240, 33%, 30%, 1)',
        secundaryLight: 'hsla(240, 33%, 60%, 1)',
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

  // optionally add more, can pass palette or template

  // grandChildrenThemes: {
  //   alt1: {
  //     template: 'alt1',
  //   },
  //   alt2: {
  //     template: 'alt2',
  //   },
  //   surface1: {
  //     template: 'surface1',
  //   },
  //   surface2: {
  //     template: 'surface2',
  //   },
  //   surface3: {
  //     template: 'surface3',
  //   },
  // },
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
