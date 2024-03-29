import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Sidebar from './components/Sidebar/Sidebar';
import GlobalStylesProvider from './providers/GlobalStylesProvider';
import ContextProvider from './providers/ContextProvider';
import { ClerkProvider, auth } from '@clerk/nextjs';
import NextTopLoader from 'nextjs-toploader';
import { dark } from '@clerk/themes';

const nunito = Nunito({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tasks Tracker',
  description: 'Tasks Manager App',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <head>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
            integrity='sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'
          />
          <link
            rel='icon'
            href='favicon.ico'
            sizes='any'
          />
        </head>
        <body className={nunito.className}>
          <NextTopLoader
            height={2}
            color='#27AE60'
            easing='cubic-bezier(0.53,0.21,0,1)'
          />
          <ContextProvider>
            <GlobalStylesProvider>
              {userId && <Sidebar />}
              <div className='w-full'> {children}</div>
            </GlobalStylesProvider>
          </ContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
