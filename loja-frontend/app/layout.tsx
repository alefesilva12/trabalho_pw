import type { Metadata } from "next";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";

import { ThemeProvider } from "../components/ThemeContext";
import { CartProvider } from "../components/CartContext";
import { ToastProvider } from "../components/ToastContext";

export const metadata: Metadata = {
  title: "Loja Online",
  description: "Ecommerce moderno",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-900 text-slate-900 dark:text-slate-100 min-h-screen">

        {/* Providers DEVEM estar DENTRO do body */}
        <ThemeProvider>
          <CartProvider>
            <ToastProvider>

              <Header />

              <div className="pt-24">
                <Container>
                  <main className="py-10">{children}</main>
                </Container>
              </div>

              <Footer />

            </ToastProvider>
          </CartProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}