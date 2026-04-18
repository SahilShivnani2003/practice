"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { categories, cities, states } from "@/lib/data"

export default function ListBusinessPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4 py-16">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-india-green/10">
            <CheckCircle className="h-8 w-8 text-india-green" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-foreground">
            Listing Submitted!
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Thank you for submitting your business. Our team will review and
            approve your listing within 24-48 hours.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Go Home
            </Link>
            <Link
              href="/listings"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Browse Listings
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="border-b border-border bg-card py-10">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">
            List Your Business
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Get your business discovered by thousands of potential customers
          </p>

          {/* Step indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                    s <= step
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s}
                </div>
                <span
                  className={`hidden text-sm sm:inline ${
                    s <= step ? "font-medium text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {s === 1 ? "Business Info" : s === 2 ? "Location" : "Details"}
                </span>
                {s < 3 && (
                  <div
                    className={`h-0.5 w-8 sm:w-16 ${
                      s < step ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (step < 3) {
              setStep(step + 1)
            } else {
              setSubmitted(true)
            }
          }}
          className="rounded-xl border border-border bg-card p-6 md:p-8"
        >
          {/* Step 1: Business Info */}
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <h2 className="text-lg font-semibold text-foreground">
                Business Information
              </h2>

              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  Business Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your business name"
                  className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Category *
                  </label>
                  <select
                    className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  >
                    <option value="">Select category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="business@example.com"
                    className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Website
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourbusiness.com"
                    className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  Business Description *
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your business, services, and what makes you unique..."
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
            </div>
          )}

          {/* Step 2: Location */}
          {step === 2 && (
            <div className="flex flex-col gap-5">
              <h2 className="text-lg font-semibold text-foreground">
                Business Location
              </h2>

              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  Address Line 1 *
                </label>
                <input
                  type="text"
                  placeholder="Street address, building name"
                  className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  Address Line 2
                </label>
                <input
                  type="text"
                  placeholder="Floor, suite, landmark"
                  className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    State *
                  </label>
                  <select
                    className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  >
                    <option value="">Select state</option>
                    {states.map((state) => (
                      <option key={state.id} value={state.id}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    City *
                  </label>
                  <select
                    className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  >
                    <option value="">Select city</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Area / Locality *
                  </label>
                  <input
                    type="text"
                    placeholder="Area name"
                    className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    placeholder="6-digit PIN"
                    maxLength={6}
                    className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Additional Details */}
          {step === 3 && (
            <div className="flex flex-col gap-5">
              <h2 className="text-lg font-semibold text-foreground">
                Additional Details
              </h2>

              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  Business Hours
                </label>
                <input
                  type="text"
                  placeholder="e.g., Mon-Sat: 9:00 AM - 6:00 PM"
                  className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  Year Established
                </label>
                <input
                  type="number"
                  placeholder="e.g., 2015"
                  min={1900}
                  max={2026}
                  className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Upload Business Images
                </label>
                <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-border bg-background px-4 py-8">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Drag and drop images here, or click to browse
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      PNG, JPG up to 5MB each. Maximum 3 images on free plan.
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="mt-3 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-primary/5 p-4">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 rounded border-border"
                  />
                  <span className="text-sm text-muted-foreground">
                    I confirm that the information provided is accurate and I have the
                    authority to list this business. I agree to the{" "}
                    <Link href="/about" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/about" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                Previous
              </button>
            ) : (
              <div />
            )}
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {step < 3 ? "Continue" : "Submit Listing"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>

        {/* Benefits */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Free Listing",
              desc: "Start with a free basic listing and upgrade anytime",
            },
            {
              title: "Get Verified",
              desc: "Build trust with a verified business badge",
            },
            {
              title: "Reach Customers",
              desc: "Be discovered by thousands of potential customers",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-card p-4 text-center"
            >
              <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
