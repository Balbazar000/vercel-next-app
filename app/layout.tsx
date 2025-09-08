export const metadata = { title: 'Vercel Next App' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
        {children}
      </body>
    </html>
  );
}
