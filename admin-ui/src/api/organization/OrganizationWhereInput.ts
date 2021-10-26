import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AccountPaymentMethodWhereUniqueInput } from "../accountPaymentMethod/AccountPaymentMethodWhereUniqueInput";

export type OrganizationWhereInput = {
  contactAdressId?: AddressWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  paymenMethodId?: AccountPaymentMethodWhereUniqueInput;
};
