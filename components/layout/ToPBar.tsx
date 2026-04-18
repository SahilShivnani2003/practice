import { Phone, Mail, Shield } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-topbar text-topbar-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
        <div className="flex items-center gap-4">
          <a
            href="tel:+911800123456"
            className="flex items-center gap-1.5 transition-colors hover:text-saffron"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">+91 1800-123-456</span>
          </a>
          <a
            href="mailto:support@gtidirectory.com"
            className="flex items-center gap-1.5 transition-colors hover:text-saffron"
          >
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden md:inline">support@gtidirectory.com</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-saffron">
          <Shield className="h-3.5 w-3.5" />
          <span>Trusted by 50,000+ Businesses</span>
        </div>
      </div>
    </div>
  );
}
