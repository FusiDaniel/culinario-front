import { createAnimations } from '@tamagui/animations-react-native';

export const animations = createAnimations({
  '100ms': {
    duration: 100,
    type: 'timing',
  },
  'bouncy': {
    damping: 9,
    mass: 0.9,
    stiffness: 150,
  },
  'lazy': {
    damping: 18,
    stiffness: 50,
  },
  'medium': {
    damping: 15,
    mass: 1,
    stiffness: 120,
  },
  'quick': {
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  'slow': {
    damping: 15,
    stiffness: 40,
  },
  'tooltip': {
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
});
