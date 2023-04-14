import { ReactElement, ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps): ReactElement {
  return (
    <html lang="en">
      <head></head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
