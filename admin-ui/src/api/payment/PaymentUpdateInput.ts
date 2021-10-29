import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentUpdateInput = {
  status?: "pending" | "completed" | "rejected" | null;
  transactionId?: string | null;
  transactionUserId?: string | null;
  user?: UserWhereUniqueInput | null;
};
