import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeProviderWrapper from '../components/ThemeProviderWrapper';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Authorization Form',
  description: 'Login screen with 2FA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
