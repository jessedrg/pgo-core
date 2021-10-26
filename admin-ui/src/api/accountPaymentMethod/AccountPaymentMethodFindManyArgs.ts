import { AccountPaymentMethodWhereInput } from "./AccountPaymentMethodWhereInput";
import { AccountPaymentMethodOrderByInput } from "./AccountPaymentMethodOrderByInput";

export type AccountPaymentMethodFindManyArgs = {
  where?: AccountPaymentMethodWhereInput;
  orderBy?: AccountPaymentMethodOrderByInput;
  skip?: number;
  take?: number;
};
