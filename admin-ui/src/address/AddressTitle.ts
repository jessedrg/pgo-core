import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "firstName";

export const AddressTitle = (record: TAddress): string => {
  return record.firstName || record.id;
};
