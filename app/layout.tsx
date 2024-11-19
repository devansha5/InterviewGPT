import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';

export const metadata: Metadata = {
  title: 'Interview GPT_DK',
  description: 'Interview GPT is your personalized AI-powered interview assistant designed to help you ace your next job interview',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Only includes the children and Analytics */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
