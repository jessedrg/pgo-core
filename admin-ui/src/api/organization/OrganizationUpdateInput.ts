import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { AccountPaymentMethodWhereUniqueInput } from "../accountPaymentMethod/AccountPaymentMethodWhereUniqueInput";

export type OrganizationUpdateInput = {
  contactAdressId?: AddressWhereUniqueInput | null;
  name?: string | null;
  paymenMethodId?: AccountPaymentMethodWhereUniqueInput | null;
};
