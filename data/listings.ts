import { Listing } from "@/types/Listing";

export const listings: Listing[] = [
  {
    id: "1",
    businessName: "Tech World Electronics",
    slug: "tech-world-electronics",
    description: "Your one-stop shop for latest electronics, mobiles, and accessories.",
    contactNumber: "+91 9876543210",
    email: "info@techworld.com",
    website: "https://techworld.com",
    categoryId: "1",
    categoryName: "Electronics",
    status: "active",
    featured: true,
    verified: true,
    viewCount: 1250,
    rating: 4.5,
    reviewCount: 120,
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
    ],
    addressLine1: "Shop No. 12, Market Road",
    addressLine2: "Near City Mall",
    area: "MP Nagar",
    district: "Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    pinCode: "462011",
    createdAt: "2025-04-01T10:00:00Z",
  },
  {
    id: "2",
    businessName: "Style Hub Fashion",
    slug: "style-hub-fashion",
    description: "Trendy fashion apparel for men and women at affordable prices.",
    contactNumber: "+91 9123456780",
    email: "contact@stylehub.com",
    website: "https://stylehub.com",
    categoryId: "2",
    categoryName: "Fashion",
    status: "active",
    featured: false,
    verified: true,
    viewCount: 860,
    rating: 4.2,
    reviewCount: 75,
    images: [
      "https://plus.unsplash.com/premium_photo-1714060724525-da3bcf371a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbiUyMGh1YnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    addressLine1: "Main Street",
    area: "New Market",
    district: "Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    pinCode: "462003",
    createdAt: "2025-04-05T12:30:00Z",
  },
  {
    id: "3",
    businessName: "Home Decor Plus",
    slug: "home-decor-plus",
    description: "Premium furniture and home decor solutions.",
    contactNumber: "+91 9988776655",
    email: "sales@homedecorplus.com",
    website: "https://homedecorplus.com",
    categoryId: "3",
    categoryName: "Home & Furniture",
    status: "active",
    featured: true,
    verified: false,
    viewCount: 540,
    rating: 4.0,
    reviewCount: 40,
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80"
    ],
    addressLine1: "Plot 45, Industrial Area",
    area: "Govindpura",
    district: "Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    pinCode: "462023",
    createdAt: "2025-03-28T09:15:00Z",
  },
  {
    id: "4",
    businessName: "DriveX Motors",
    slug: "drivex-motors",
    description: "Authorized dealer for cars and bikes with best deals.",
    contactNumber: "+91 9090909090",
    email: "info@drivex.com",
    website: "https://drivex.com",
    categoryId: "4",
    categoryName: "Vehicles",
    status: "inactive",
    featured: false,
    verified: true,
    viewCount: 300,
    rating: 3.8,
    reviewCount: 25,
    images: [
      "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80"
    ],
    addressLine1: "NH-12 Highway Road",
    area: "Hoshangabad Road",
    district: "Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    pinCode: "462026",
    createdAt: "2025-04-10T14:00:00Z",
  },
  {
    id: "5",
    businessName: "Readers Point Bookstore",
    slug: "readers-point-bookstore",
    description: "A paradise for book lovers with a wide collection of genres.",
    contactNumber: "+91 9871234567",
    email: "hello@readerspoint.com",
    website: "https://readerspoint.com",
    categoryId: "5",
    categoryName: "Books",
    status: "active",
    featured: true,
    verified: true,
    viewCount: 720,
    rating: 4.7,
    reviewCount: 95,
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80"
    ],
    addressLine1: "Shop 8, Central Plaza",
    area: "Arera Colony",
    district: "Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    pinCode: "462016",
    createdAt: "2025-04-12T11:45:00Z",
  },
];

export const getFeaturedListing = (): Listing[] | null => {
  const featuredListings = listings.filter(listing => listing.featured);
  return featuredListings.length > 0 ? featuredListings : null;
}

export function searchListings(query: string, location?: string): Listing[] {
  let results = listings.filter((l) => l.status === "active")
  if (query) {
    const q = query.toLowerCase()
    results = results.filter(
      (l) =>
        l.businessName.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q) ||
        l.categoryName.toLowerCase().includes(q) 
    )
  }
  if (location && location !== "all") {
    const loc = location.toLowerCase()
    results = results.filter(
      (l) =>
        l.city.toLowerCase().includes(loc) ||
        l.state.toLowerCase().includes(loc)
    )
  }
  return results
}