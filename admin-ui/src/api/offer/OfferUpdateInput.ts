export type OfferUpdateInput = {
  customNo?: string | null;
  publishedAt?: Date | null;
  status?: "draft" | "pending" | "publish" | "rejected" | null;
};
