import "./globals.css";
import type { Metadata } from "next";
import { ModalProvider } from "@/context/ModalContext";
import CookieConsentBanner from "@/components/LegalCookieConsentBanner";
import GlobalModal from "@/components/ContactGlobalModal";
import CustomCursor from "@/components/AddCustomCursor";
// import Navbar from "@/components/navbar/Navbar";
import NavBarLgLinksContact from "@/components/NavBarLgLinksContact";

export const metadata: Metadata = {
  title: "Retiro de Bienestar",
  description: "Una experiencia de transformación consciente",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className=" dark:bg-darker dark:text-lighter">
        <ModalProvider>
        <NavBarLgLinksContact />
          {children}
          <CookieConsentBanner />
          <GlobalModal />
          <CustomCursor />
        </ModalProvider>
      </body>
    </html>
  );
}
