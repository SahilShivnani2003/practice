"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { BadgeCheck, SlidersHorizontal, Star } from "lucide-react";
import Link from "next/link";
import { SearchBar } from "@/components/home/SearchBar";
import { searchListings } from "@/data/listings";
import { categories } from "@/data/categories";
import { getCitiesByCountry } from "@/utils/getCitites";
import Image from "next/image";

// ✅ NOT async — client components cannot be async
function ListingsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const location = searchParams.get("location") || "";
  const category = searchParams.get("category") || "";

  const [cities, setCities] = useState<{ id: number; name: string }[]>([]);

//   useEffect(() => {
//     getCitiesByCountry().then(setCities);
//   }, []);

  // ✅ Derive results synchronously — no await needed
  let results = searchListings(query, location);

  if (category) {
    const cat = categories.find((c) => c.slug === category);
    if (cat) {
      results = results.filter((l) => l.categoryId === cat.id);
    }
  }

  return (
    <div>
      {/* Search Header */}
      <section className="border-b border-border bg-secondary py-8">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            {query ? `Results for "${query}"` : "All Business Listings"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {results.length} {results.length === 1 ? "listing" : "listings"}{" "}
            found
            {location && location !== "all" ? ` in ${location}` : ""}
          </p>
          <div className="mt-6 max-w-2xl">
            <SearchBar cities={cities} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Filters */}
          <aside className="w-full shrink-0 lg:w-64">
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-semibold text-foreground">
                  Filter by Category
                </h2>
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <Link
                  href="/listings"
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    !category
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  All Categories
                </Link>
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/listings?category=${cat.slug}${query ? `&q=${query}` : ""}${location ? `&location=${location}` : ""}`}
                    className={`rounded-md px-3 py-2 text-sm transition-colors ${
                      category === cat.slug
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {cat.name}
                    <span className="ml-1 text-xs opacity-60">
                      ({cat.listingCount})
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <div className="flex-1">
            {results.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((listing) => (
                  <Link
                    key={listing.slug}
                    href={`/listings/${listing.slug}`}
                    className="group block"
                  >
                    <div className="overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={listing.images[0]}
                          alt={listing.businessName}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {listing.featured && (
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
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card py-16 text-center">
                <h3 className="text-lg font-semibold text-foreground">
                  No businesses found
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Try adjusting your search terms or browse our categories to
                  find what you are looking for.
                </p>
                <Link
                  href="/listings"
                  className="mt-6 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View All Listings
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ListingsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      }
    >
      <ListingsContent />
    </Suspense>
  );
}