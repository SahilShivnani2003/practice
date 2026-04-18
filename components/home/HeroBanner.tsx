import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <Image
        src="https://images.unsplash.com/photo-1557858310-9052820906f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2ZXJ0aXNlbWVudHxlbnwwfHwwfHx8MA%3D%3D"
        alt="Business district"
        fill
        className="object-cover brightness-[0.35]"
        sizes="(max-width: 1280px) 100vw, 1280px"
        priority
      />
      <div className="relative px-6 py-12 sm:px-10 sm:py-16">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-card/20 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Premium Featured Listing
        </span>
        <h2 className="mt-4 max-w-md text-2xl font-bold leading-tight text-primary-foreground sm:text-3xl">
          Elevate Your Business Presence
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
          Join thousands of successful businesses reaching customers daily
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/list-business"
            className="rounded-lg bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Get Featured
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
