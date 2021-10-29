import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type OrganizationUpdateInput = {
  addres?: string | null;
  address?: AddressWhereUniqueInput | null;
  name?: string | null;
};
