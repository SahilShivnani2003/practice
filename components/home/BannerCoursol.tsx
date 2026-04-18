"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Banner } from "@/types/Banner";

interface BannerCarouselProps {
  banners: Banner[];
}

export function BannerCarousel({ banners }: BannerCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const prev = () => {
    setCurrent((p) => (p - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const bgColors: Record<string, string> = {
    promotional: "bg-primary",
    featured: "bg-card",
    opportunity: "bg-india-green",
  };

  const textColors: Record<string, string> = {
    promotional: "text-primary-foreground",
    featured: "text-foreground",
    opportunity: "text-india-green-foreground",
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {banners.map((banner) => (
            <div key={banner.id} className="w-full flex-shrink-0">
              <div className="grid min-h-[220px] gap-0 sm:grid-cols-3">
                <div
                  className={`flex flex-col justify-center p-6 sm:p-8 ${bgColors[banner.bannerType]} ${textColors[banner.bannerType]}`}
                >
                  <h3 className="text-lg font-bold">{banner.title}</h3>
                  <p className="mt-1 text-sm opacity-90">{banner.subtitle}</p>
                  <p className="mt-2 text-xs opacity-75">
                    {banner.description}
                  </p>
                  <Link
                    href={banner.redirectUrl}
                    className={`mt-4 inline-flex w-fit rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
                      banner.bannerType === "featured"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-card text-foreground hover:bg-secondary"
                    }`}
                  >
                    {banner.ctaText}
                  </Link>
                </div>
                <div className="relative hidden sm:block">
                  {banner.mediaPath ? (
                    <Image
                      src={banner.mediaPath}
                      alt={banner.campaignName}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-secondary">
                      <div className="text-center text-muted-foreground">
                        <div className="text-4xl font-bold text-primary">
                          GTID
                        </div>
                        <p className="mt-1 text-xs">Your Trusted Directory</p>
                      </div>
                    </div>
                  )}
                  {banner.bannerType === "featured" && (
                    <span className="absolute right-2 top-2 rounded-md bg-destructive px-2 py-0.5 text-xs font-bold text-primary-foreground">
                      HOT
                    </span>
                  )}
                </div>
                <div
                  className={`hidden flex-col justify-center p-6 sm:flex sm:p-8 ${
                    banner.bannerType === "opportunity"
                      ? bgColors.opportunity
                      : bgColors.promotional
                  } ${banner.bannerType === "opportunity" ? textColors.opportunity : textColors.promotional}`}
                >
                  <h3 className="text-lg font-bold">
                    {banner.bannerType === "opportunity"
                      ? "Remote Opportunities"
                      : "Grow Your Reach"}
                  </h3>
                  <p className="mt-1 text-sm opacity-90">
                    {banner.bannerType === "opportunity"
                      ? "Work from anywhere"
                      : "Join 50,000+ businesses"}
                  </p>
                  <p className="mt-2 text-xs opacity-75">
                    {banner.bannerType === "opportunity"
                      ? "Flexible positions with competitive pay"
                      : "Get discovered by millions of customers daily"}
                  </p>
                  <Link
                    href={
                      banner.bannerType === "opportunity"
                        ? "/contact"
                        : "/pricing"
                    }
                    className="mt-4 inline-flex w-fit rounded-lg bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    {banner.bannerType === "opportunity"
                      ? "Apply Now"
                      : "Learn More"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-1.5 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-card"
        aria-label="Previous banner"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-1.5 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-card"
        aria-label="Next banner"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-4 flex items-center justify-center gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-6 bg-primary" : "w-2 bg-border"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
