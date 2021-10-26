import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { AccountPaymentMethodWhereUniqueInput } from "../accountPaymentMethod/AccountPaymentMethodWhereUniqueInput";

export type OrganizationCreateInput = {
  contactAdressId?: AddressWhereUniqueInput | null;
  name?: string | null;
  paymenMethodId?: AccountPaymentMethodWhereUniqueInput | null;
};
