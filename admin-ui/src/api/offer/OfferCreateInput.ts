export type OfferCreateInput = {
  customNumber?: string | null;
  publishedAt?: Date | null;
  status?: "draft" | "pending" | "publish" | "rejected" | null;
};
