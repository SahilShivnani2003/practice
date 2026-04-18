import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Shield,
  TrendingUp,
  Building2,
  Target,
  ArrowRight,
} from "lucide-react";
const stats = [
  { label: "Businesses Listed", value: "50,000+" },
  { label: "Cities Covered", value: "500+" },
  { label: "Monthly Visitors", value: "2M+" },
  { label: "Verified Reviews", value: "100,000+" },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Verification",
    description:
      "Every business goes through our verification process to ensure authenticity and reliability for our users.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We build tools that help local communities discover and support businesses in their neighborhood.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description:
      "Our platform is designed to help businesses grow by connecting them with the right audience.",
  },
  {
    icon: Target,
    title: "Precision Search",
    description:
      "Advanced search and filtering helps users find exactly the services they need, when they need them.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Register Your Business",
    description:
      "Sign up and fill in your business details to create a listing.",
  },
  {
    step: "2",
    title: "Get Verified",
    description: "Our team reviews and verifies your business information.",
  },
  {
    step: "3",
    title: "Go Live",
    description:
      "Your listing goes live and starts attracting potential customers.",
  },
  {
    step: "4",
    title: "Grow & Engage",
    description:
      "Respond to reviews, update your profile, and watch your business grow.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-card py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              {"India's Most Trusted"}
              <br />
              Business Directory
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg text-pretty">
              GT India Directory Helpline connects millions of users with
              verified businesses across India. We are on a mission to make
              discovering trusted local services effortless.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-primary/5 py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-primary md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Our Story
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Founded with a vision to bridge the gap between businesses and
              consumers in India, GT India Directory Helpline (GTID) started as
              a small local directory and has grown to become one of the most
              comprehensive business listing platforms in the country.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We understand the challenges that both small businesses and
              consumers face. Businesses need visibility, while consumers need
              trust. GTID solves both by providing a verified, organized, and
              searchable platform that brings them together.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Today, we serve over 50,000 businesses across 500+ cities, and our
              platform attracts more than 2 million monthly visitors looking for
              trusted services.
            </p>
          </div>
          <div className="flex shrink-0 items-center justify-center">
            <Image
              src="/images/logo.jpg"
              alt="GT India Directory Helpline"
              width={240}
              height={240}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/50 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Our Values
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              What drives everything we do
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            How It Works
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Getting started is easy
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {item.step}
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary/5 py-14">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <Building2 className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Join thousands of businesses already thriving on GTID
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/list-business"
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              List Your Business
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
