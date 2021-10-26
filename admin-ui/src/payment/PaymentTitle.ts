import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "transactionId";

export const PaymentTitle = (record: TPayment): string => {
  return record.transactionId || record.id;
};
