"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ShoppingBag,
  Briefcase,
  Building2,
  LayoutGrid,
  ChevronDown,
} from "lucide-react";
import { categories } from "@/data/categories";

const navLinks = [
  { href: "/listings", label: "Listings", icon: ShoppingBag },
  { href: "/categories/education-training", label: "Careers", icon: Briefcase },
  { href: "/categories/real-estate", label: "Properties", icon: Building2 },
  { href: "/product", label: "Products & Services", icon: LayoutGrid },
  { href: "/tourist-places", label: "Tourist Places", icon: LayoutGrid },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logoBgRemoved.png"
            alt="GTID Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-base font-bold leading-tight text-foreground">
              GT India Directory
            </span>
            <span className="text-xs text-muted-foreground">
              Professional Business Network
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
          <div className="relative">
            <button
              onClick={() => setCatOpen(!catOpen)}
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <LayoutGrid className="h-4 w-4" />
              Categories
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${catOpen ? "rotate-180" : ""}`}
              />
            </button>
            {catOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setCatOpen(false)}
                />
                <div className="absolute right-0 top-full z-50 mt-1 w-72 rounded-lg border border-border bg-card p-2 shadow-lg">
                  {categories.slice(0, 10).map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/categories/${cat.slug}`}
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary"
                      onClick={() => setCatOpen(false)}
                    >
                      <Image
                        src={cat.imageUrl}
                        alt={cat.name}
                        width={24}
                        height={24}
                        className="rounded object-cover"
                      />

                      {cat.name}
                      <span className="ml-auto text-xs text-muted-foreground">
                        {cat.listingCount}
                      </span>
                    </Link>
                  ))}
                  <div className="mt-1 border-t border-border pt-1">
                    <Link
                      href="/categories"
                      className="flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-secondary"
                      onClick={() => setCatOpen(false)}
                    >
                      View All Categories
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/list-business"
            className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            List Business
          </Link>
          <Link
            href="/login"
            className="hidden rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary sm:inline-flex"
          >
            Login / Sign Up
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  onClick={() => setMobileOpen(false)}
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              ))}
              <Link
                href="/categories"
                className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
              >
                <LayoutGrid className="h-4 w-4" />
                All Categories
              </Link>
              <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
                <Link
                  href="/list-business"
                  className="rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  List Your Business
                </Link>
                <Link
                  href="/login"
                  className="rounded-lg border border-border px-4 py-2.5 text-center text-sm font-semibold text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  Login / Sign Up
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
