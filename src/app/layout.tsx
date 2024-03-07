"use client";

import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Layout } from "@/components";
import { Navbar } from "../components/navbar";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
});

export default function RootLayout({
  children,
  calcas,
  camisetas,
  contato,
  sapatos,
}: {
  children: React.ReactNode,
  calcas: React.ReactNode,
  camisetas: React.ReactNode,
  contato: React.ReactNode,
  sapatos: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={openSans.className}>
        <Layout>
          <Navbar/>
          <section>
            {children}
          </section>
          <section>
            {calcas}
            {camisetas}
            {contato}
            {sapatos}
          </section>
        </Layout>
      </body>
    </html>
  );
}
