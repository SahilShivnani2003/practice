export interface Subscription {
  id: string;
  listingId: string;
  planId: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  isExpired: boolean;
  daysRemaining: number;
  createdAt: string;
}