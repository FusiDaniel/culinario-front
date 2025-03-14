'use client';

import type { ReactNode } from 'react';

type ButtonProps = {
  appName: string;
  children: ReactNode;
  className?: string;
};

export const Button = ({ appName, children, className }: ButtonProps) => (
  <button
    type="button"
    className={className}
    // eslint-disable-next-line no-alert
    onClick={() => alert(`Hello from your ${appName} app!`)}
  >
    {children}
  </button>
);
