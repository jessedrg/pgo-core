import { Account } from "../account/Account";
import { Address } from "../address/Address";
import { Part } from "../part/Part";
import { OrganizationPaymentMethod } from "../organizationPaymentMethod/OrganizationPaymentMethod";

export type Organization = {
  accounts?: Array<Account>;
  addresses?: Array<Address>;
  createdAt: Date;
  id: string;
  name: string | null;
  parts?: Array<Part>;
  paymentMethod?: OrganizationPaymentMethod | null;
  updatedAt: Date;
};
