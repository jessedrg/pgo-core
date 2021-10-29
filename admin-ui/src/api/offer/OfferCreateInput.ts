export type OfferCreateInput = {
  customNo?: string | null;
  publishedAt?: Date | null;
  status?: "draft" | "pending" | "publish" | "rejected" | null;
};
