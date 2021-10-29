export type ProductionCreateInput = {
  discomformity?: boolean | null;
  status?:
    | "pending"
    | "processing"
    | "shipped"
    | "quality"
    | "completed"
    | "canceled"
    | "rejected"
    | null;
};
