import type { Metadata } from "next";

import "./globals.css"





export const metadata: Metadata = {
  title: "service page",
  description: "this is services page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer><footer>this is footer</footer></footer>
      </body>
    </html>
  );
}
