import '@/styles/reset.scss';
import '@picocss/pico/css/pico.slim.min.css';
import '@/styles/global.scss';

import { Analytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';

import GlobalFooter from '@/app/components/GlobalFooter';
import StyledComponentsProvider from '@/app/components/StyledComponentRegistery';

interface Props {
  children: ReactNode;
}

export const metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
};

function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsProvider>{children}</StyledComponentsProvider>
        <Analytics />
        <GlobalFooter />
      </body>
    </html>
  );
}

export default RootLayout;
