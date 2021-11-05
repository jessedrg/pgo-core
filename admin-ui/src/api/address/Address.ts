import { Organization } from "../organization/Organization";

export type Address = {
  company: string | null;
  country: string | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  locality: string | null;
  organization?: Organization | null;
  phone: string | null;
  phonePrefix: string | null;
  postalCode: string | null;
  state: string | null;
  street: string | null;
  streetNumber: string | null;
  type?: "Billing" | "Shipping" | null;
  updatedAt: Date;
  vat: string | null;
};
