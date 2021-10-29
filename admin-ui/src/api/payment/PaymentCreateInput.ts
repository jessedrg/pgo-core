import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentCreateInput = {
  status?: "pending" | "completed" | "rejected" | null;
  transactionId?: string | null;
  transactionUserId?: string | null;
  user?: UserWhereUniqueInput | null;
};
