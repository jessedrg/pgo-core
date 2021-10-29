import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type OrganizationCreateInput = {
  addres?: string | null;
  address?: AddressWhereUniqueInput | null;
  name?: string | null;
};
