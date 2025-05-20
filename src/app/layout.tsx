import type { Metadata } from "next";
import { Mulish, Montserrat } from "next/font/google";
import "./styles/scss/style.scss";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dwi Darma's Personal website",
  description: "Dwi Darma's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${mulish.variable} ${montserrat.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
