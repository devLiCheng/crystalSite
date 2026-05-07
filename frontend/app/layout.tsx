import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'crystalSite',
  description: 'Next.js frontend for crystalSite',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
