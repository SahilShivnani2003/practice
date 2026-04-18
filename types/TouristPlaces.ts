export interface TouristPlace {
    id: string
    name: string
    slug: string
    description: string
    longDescription: string
    category: string
    location: string
    city: string
    state: string
    latitude: number
    longitude: number
    image: string
    rating: number
    reviewCount: number
    bestTimeToVisit: string
    entryFee: string
    openingHours: string
    website: string
    contactNumber: string
    images: string[]
    status: "active" | "pending" | "inactive"
    featured: boolean
    createdAt: string
}