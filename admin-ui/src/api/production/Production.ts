export type Production = {
  createdAt: Date;
  discomformity: boolean | null;
  id: string;
  status?:
    | "pending"
    | "processing"
    | "shipped"
    | "quality"
    | "completed"
    | "canceled"
    | "rejected"
    | null;
  updatedAt: Date;
};
