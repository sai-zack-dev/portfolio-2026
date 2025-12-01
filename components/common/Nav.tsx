"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme: currentTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems
          items={navItems.map((item) => ({
            ...item,
            active: pathname === item.link,
          }))}
        />
        <ThemeSwitcher
          value={currentTheme as "light" | "dark" | "system"}
          onChange={(value) => setTheme(value)}
        />
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => {
            const isActive = pathname === item.link;

            return (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative text-neutral-600 px-4 py-2 rounded-md dark:text-neutral-300 w-full ${
                  isActive
                    ? "bg-neutral-200 dark:bg-neutral-700 font-semibold"
                    : ""
                }`}
              >
                <span className="block">{item.name}</span>
              </Link>
            );
          })}

          {/* Theme Switcher */}
          <div className="w-full flex justify-center mt-4">
            <ThemeSwitcher
              value={currentTheme as "light" | "dark" | "system"}
              onChange={(value) => setTheme(value)}
            />
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
