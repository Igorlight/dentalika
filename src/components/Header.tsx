import Link from "next/link";
import React from "react";
import ContactUs from "./ContactUs";
import HeaderClient from "./HeaderClient";

export default function Header() {
  return (
    <header className="border-b fixed top-0 left-0 right-0 z-50 bg-white" role="banner">
      <div className="max-w-[1560px] mx-auto px-4 h-[60px] flex items-center w-full">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="text-xl font-semibold uppercase" aria-label="Денталика - главная страница">
            Денталика
          </Link>
          <HeaderClient />
          <div>
            <ContactUs />
          </div>
        </div>
      </div>
    </header>
  );
}
