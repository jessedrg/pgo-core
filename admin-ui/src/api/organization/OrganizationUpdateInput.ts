import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type OrganizationUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  name?: string | null;
};
