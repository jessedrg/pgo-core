export type OfferUpdateInput = {
  customNumber?: string | null;
  publishedAt?: Date | null;
  status?: "draft" | "pending" | "publish" | "rejected" | null;
};
