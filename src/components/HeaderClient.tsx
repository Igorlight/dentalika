"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function HeaderClient({type}: {type: "mobile" | "desktop"}) {
  const pathname = usePathname();
  
  const getLinkStyles = (currentPath: string) => {
    const isActive = pathname === currentPath;
    const baseStyles = "relative hover:text-primary transition-colors duration-300";
    const activeStyles = isActive ? "text-primary font-medium" : "";
    const mobileStyles = type === "mobile" ? "py-4 px-4 w-full border-b text-center" : "";
    const underlineStyles = `before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300 ${
      isActive ? "before:w-full" : "before:w-0 hover:before:w-full"
    }`;
    
    return `${baseStyles} ${activeStyles} ${mobileStyles} ${underlineStyles}`;
  };
  
  return (
    <nav className={cn("flex items-center text-primary", type === "mobile" ? "flex-col text-lg" : "flex-row gap-4")} role="navigation" aria-label="Главная навигация">
      <Link 
        href="/" 
        className={getLinkStyles("/")}
        aria-current={pathname === "/" ? "page" : undefined}
      >
        Главная
      </Link>
      <Link 
        href="/about" 
        className={getLinkStyles("/about")}
        aria-current={pathname === "/about" ? "page" : undefined}
      >
        О нас
      </Link>
      <Link 
        href="/services" 
        className={getLinkStyles("/services")}
        aria-current={pathname === "/services" ? "page" : undefined}
      >
        Услуги
      </Link>
      <Link 
        href="/team" 
        className={getLinkStyles("/team")}
        aria-current={pathname === "/team" ? "page" : undefined}
      >
        Команда
      </Link>
      <Link 
        href="/our-works" 
        className={getLinkStyles("/our-works")}
        aria-current={pathname === "/our-works" ? "page" : undefined}
      >
        Примеры работ
      </Link>
      <Link 
        href="/news" 
        className={getLinkStyles("/news")}
        aria-current={pathname === "/news" ? "page" : undefined}
      >
        Новости
      </Link>
      <Link 
        href="/contacts" 
        className={getLinkStyles("/contacts")}
        aria-current={pathname === "/contacts" ? "page" : undefined}
      >
        Контакты
      </Link>
    </nav>
  );
}
