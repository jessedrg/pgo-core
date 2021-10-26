import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "id";

export const AccountTitle = (record: TAccount): string => {
  return record.id || record.id;
};
