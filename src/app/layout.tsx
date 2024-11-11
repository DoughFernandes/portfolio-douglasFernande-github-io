import { Header } from '@src/components/Header';
import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import './scss/layout.scss';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Esse é uma apresentação sobre Douglas Fernandes, tudo sobre sua carreira'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning={true}>
      <body className={kanit.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
