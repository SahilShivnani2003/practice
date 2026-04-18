import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/about#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const forBusiness = [
  { href: "/list-business", label: "List Your Business" },
  { href: "/pricing", label: "Advertise" },
  { href: "/pricing", label: "Premium Plans" },
  { href: "/categories", label: "Resources" },
];

const support = [
  { href: "/contact", label: "Help Center" },
  { href: "/about#terms", label: "Terms of Service" },
  { href: "/about#privacy", label: "Privacy Policy" },
  { href: "/categories", label: "Sitemap" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logoBgRemoved.png"
                alt="GTID Logo"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="text-base font-bold text-foreground">
                GT India Directory
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your trusted platform for discovering and connecting with verified
              businesses across India.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              For Business
            </h3>
            <ul className="flex flex-col gap-2.5">
              {forBusiness.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Support
            </h3>
            <ul className="flex flex-col gap-2.5">
              {support.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {"© 2026 GT India Directory Helpline — All Rights Reserved"}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-primary"
            >
              <FaFacebookF className="h-5 w-5" />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary"
            >
              <FaTwitter className="h-5 w-5" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
