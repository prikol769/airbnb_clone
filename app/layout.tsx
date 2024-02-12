import { Nunito } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Modal from "@/components/modals/Modal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Modal isOpen title="hello" actionLabel="Submit" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
