export type Offer = {
  createdAt: Date;
  customNo: string | null;
  id: string;
  publishedAt: Date | null;
  status?: "draft" | "pending" | "publish" | "rejected" | null;
  updatedAt: Date;
};
