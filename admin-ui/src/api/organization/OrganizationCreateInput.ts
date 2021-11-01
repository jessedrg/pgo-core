import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type OrganizationCreateInput = {
  address?: AddressWhereUniqueInput | null;
  name?: string | null;
};
