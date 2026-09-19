import './globals.css';
import type { ReactNode } from 'react';

export const metadata = { title: 'ZAID FF Tournament', description: 'Free Fire Tournament Hub' };

export default function RootLayout({children}:{children:ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
