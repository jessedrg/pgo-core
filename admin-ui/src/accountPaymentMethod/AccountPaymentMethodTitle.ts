import { AccountPaymentMethod as TAccountPaymentMethod } from "../api/accountPaymentMethod/AccountPaymentMethod";

export const ACCOUNTPAYMENTMETHOD_TITLE_FIELD = "type";

export const AccountPaymentMethodTitle = (
  record: TAccountPaymentMethod
): string => {
  return record.type || record.id;
};
