'use client';
import { SessionProvider } from 'next-auth/react';

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <SessionProvider>{children}<div id="portal" /></SessionProvider>;
};
