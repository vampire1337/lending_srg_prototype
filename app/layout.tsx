import type { Metadata } from 'next';
import { Geologica } from 'next/font/google';

import './globals.css';

const geologica = Geologica({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-main',
});

export const metadata: Metadata = {
  title: 'Платформа SRG — инфраструктура страхования для банков и страховых компаний',
  description:
    'SRG соединяет банки, страховые компании и агентов: автоматизация андеррайтинга, выпуск сложных документов и API-интеграции в корпоративные экосистемы.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={geologica.variable}>{children}</body>
    </html>
  );
}
