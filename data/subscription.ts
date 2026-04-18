import { Subscription } from "@/types/Subscription";

export const subscriptions: Subscription[] = [
    {
        id: "1",
        listingId: "1",
        planId: "3", // Pro Plan
        startDate: "2025-04-01T00:00:00Z",
        endDate: "2025-09-28T23:59:59Z",
        isActive: true,
        isExpired: false,
        daysRemaining: 165,
        createdAt: "2025-04-01T10:00:00Z",
    },
    {
        id: "2",
        listingId: "2",
        planId: "2", // Basic Plan
        startDate: "2025-03-15T00:00:00Z",
        endDate: "2025-06-13T23:59:59Z",
        isActive: true,
        isExpired: false,
        daysRemaining: 60,
        createdAt: "2025-03-15T09:30:00Z",
    },
    {
        id: "3",
        listingId: "3",
        planId: "1", // Free Plan
        startDate: "2025-02-01T00:00:00Z",
        endDate: "2025-03-03T23:59:59Z",
        isActive: false,
        isExpired: true,
        daysRemaining: 0,
        createdAt: "2025-02-01T08:00:00Z",
    },
    {
        id: "4",
        listingId: "4",
        planId: "4", // Premium Plan
        startDate: "2025-01-10T00:00:00Z",
        endDate: "2026-01-09T23:59:59Z",
        isActive: true,
        isExpired: false,
        daysRemaining: 268,
        createdAt: "2025-01-10T11:45:00Z",
    },
    {
        id: "5",
        listingId: "5",
        planId: "2", // Basic Plan
        startDate: "2025-02-20T00:00:00Z",
        endDate: "2025-05-21T23:59:59Z",
        isActive: true,
        isExpired: false,
        daysRemaining: 35,
        createdAt: "2025-02-20T14:20:00Z",
    },
];