import type { config } from '@repo/config';

export type Conf = typeof config;

declare module '@repo/ui' {
  interface TamaguiCustomConfig extends Conf {}
}
