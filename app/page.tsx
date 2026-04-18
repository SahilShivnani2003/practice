import { BannerCarousel } from "@/components/home/BannerCoursol";
import { BusinessCard } from "@/components/home/BusinessCard";
import { CategoryCard } from "@/components/home/CategoryCard";
import { HeroBanner } from "@/components/home/HeroBanner";
import { SearchBar } from "@/components/home/SearchBar";
import { banners } from "@/data/banners";
import { categories } from "@/data/categories";
import { getFeaturedListing, listings } from "@/data/listings";
import { getCitiesByCountry } from "@/utils/getCitites";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function HomePage() {
  const featured = getFeaturedListing();
  const allActive = listings.filter((l) => l.status === "active");
  //const cities = await getCitiesByCountry();
  const cities: {id: number; name: string}[] = [];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Discover Trusted Businesses
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Connect with verified professionals and services in your area
          </p>
          <div className="mt-8 flex justify-center">
            <SearchBar cities={cities} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Banner Carousel */}
        <div className="mt-10">
          <BannerCarousel banners={banners} />
        </div>

        {/* Featured Businesses */}
        <section className="mt-14">
          <div className="flex items-start gap-3">
            <Star className="mt-0.5 h-6 w-6 fill-saffron text-saffron" />
            <div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                Featured Businesses
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Verified and highly rated listings
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured?.map((listing) => (
              <BusinessCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>

        {/* Browse Categories */}
        <section className="mt-14">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                Browse Categories
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Find businesses by industry
              </p>
            </div>
            <Link
              href="/categories"
              className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {categories.slice(0, 12).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* All Businesses */}
        <section className="mt-14">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                All Businesses
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {allActive.length} listings found
              </p>
            </div>
            <Link
              href="/listings"
              className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allActive.slice(0, 6).map((listing) => (
              <BusinessCard key={listing.id} listing={listing} />
            ))}
          </div>
          {allActive.length > 6 && (
            <div className="mt-8 flex justify-center">
              <Link
                href="/listings"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                View All Listings
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
