import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { AccountUpdateInput } from "./AccountUpdateInput";

export type UpdateAccountArgs = {
  where: AccountWhereUniqueInput;
  data: AccountUpdateInput;
};
