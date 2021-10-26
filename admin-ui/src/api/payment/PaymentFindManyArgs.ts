import { PaymentWhereInput } from "./PaymentWhereInput";
import { PaymentOrderByInput } from "./PaymentOrderByInput";

export type PaymentFindManyArgs = {
  where?: PaymentWhereInput;
  orderBy?: PaymentOrderByInput;
  skip?: number;
  take?: number;
};
