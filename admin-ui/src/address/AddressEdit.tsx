import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "Billing", value: "Billing" },
            { label: "Shipping", value: "Shipping" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Vat" source="vat" />
      </SimpleForm>
    </Edit>
  );
};
