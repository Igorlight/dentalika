"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function HeaderClient() {
  const pathname = usePathname();
  
  return (
    <nav className="hidden md:flex items-center gap-4 text-primary" role="navigation" aria-label="Главная навигация">
      <Link 
        href="/" 
        className={`relative hover:text-primary transition-colors duration-300 ${
          pathname === "/" ? "text-primary font-medium" : ""
        } before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300 ${
          pathname === "/" 
            ? "before:w-full" 
            : "before:w-0 hover:before:w-full"
        }`}
        aria-current={pathname === "/" ? "page" : undefined}
      >
        Главная
      </Link>
      <Link 
        href="/about" 
        className={`relative hover:text-primary transition-colors duration-300 ${
          pathname === "/about" ? "text-primary font-medium" : ""
        } before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300 ${
          pathname === "/about" 
            ? "before:w-full" 
            : "before:w-0 hover:before:w-full"
        }`}
        aria-current={pathname === "/about" ? "page" : undefined}
      >
        О нас
      </Link>
      <Link 
        href="/services" 
        className={`relative hover:text-primary transition-colors duration-300 ${
          pathname === "/services" ? "text-primary font-medium" : ""
        } before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300 ${
          pathname === "/services" 
            ? "before:w-full" 
            : "before:w-0 hover:before:w-full"
        }`}
        aria-current={pathname === "/services" ? "page" : undefined}
      >
        Услуги
      </Link>
      <Link 
        href="/team" 
        className={`relative hover:text-primary transition-colors duration-300 ${
          pathname === "/team" ? "text-primary font-medium" : ""
        } before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300 ${
          pathname === "/team" 
            ? "before:w-full" 
            : "before:w-0 hover:before:w-full"
        }`}
        aria-current={pathname === "/team" ? "page" : undefined}
      >
        Команда
      </Link>
      <Link 
        href="/contacts" 
        className={`relative hover:text-primary transition-colors duration-300 ${
          pathname === "/contacts" ? "text-primary font-medium" : ""
        } before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300 ${
          pathname === "/contacts" 
            ? "before:w-full" 
            : "before:w-0 hover:before:w-full"
        }`}
        aria-current={pathname === "/contacts" ? "page" : undefined}
      >
        Контакты
      </Link>
    </nav>
  );
}
