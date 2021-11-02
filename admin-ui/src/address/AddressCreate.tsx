import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Company" source="company" />
        <TextInput label="Country" source="country" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Locality" source="locality" />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <TextInput label="Phone" source="phone" />
        <TextInput label="Phone Prefix" source="phonePrefix" />
        <TextInput label="Postal Code" source="postalCode" />
        <TextInput label="State" source="state" />
        <TextInput label="Street" source="street" />
        <TextInput label="Street Number" source="streetNumber" />
        <TextInput label="Type" source="type" />
        <TextInput label="Vat" source="vat" />
      </SimpleForm>
    </Create>
  );
};
