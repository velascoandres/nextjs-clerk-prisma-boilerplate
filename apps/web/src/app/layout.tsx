import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from 'next/font/google'


import "../styles/globals.scss";
// include styles from the ui package
import "ui/styles.css";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
     </html>
    </ClerkProvider>
  );
}
