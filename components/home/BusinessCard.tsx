import Link from "next/link";
import Image from "next/image";
import { BadgeCheck, Star } from "lucide-react";
import { Listing } from "@/types/Listing";

interface BusinessCardProps {
  listing: Listing;
  showFeaturedBadge?: boolean;
}

export function BusinessCard({
  listing,
  showFeaturedBadge = true,
}: BusinessCardProps) {
  return (
    <Link href={`/listings/${listing.slug}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={listing.images[0]}
            alt={listing.businessName}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {showFeaturedBadge && listing.featured && (
            <span className="absolute left-3 top-3 rounded-md bg-saffron px-2.5 py-1 text-xs font-semibold text-saffron-foreground">
              Featured
            </span>
          )}
          {listing.verified && (
            <span className="absolute right-3 top-3 rounded-full bg-india-green p-1">
              <BadgeCheck className="h-4 w-4 text-india-green-foreground" />
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold text-foreground group-hover:text-primary">
            {listing.businessName}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {listing.description}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              {listing.categoryName}
            </span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-saffron text-saffron" />
              <span className="text-sm font-semibold text-foreground">
                {listing.rating}
              </span>
              <span className="text-xs text-muted-foreground">
                ({listing.reviewCount})
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
