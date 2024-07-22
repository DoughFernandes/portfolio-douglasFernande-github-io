import type { Metadata } from 'next';
import './scss/layout.scss';

export const metadata: Metadata = {
  title: 'Portfólio ',
  description:
    'Esse é uma apresentação sobre Douglas Fernandes, tudo sobre sua carreira',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning={true}>
      {children}
    </html>
  );
}
