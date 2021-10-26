import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="company" source="company" />
        <TextInput label="country" source="country" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="locality" source="locality" />
        <TextInput label="phone" source="phone" />
        <TextInput label="phonePrefix" source="phonePrefix" />
        <TextInput label="postalCode" source="postalCode" />
        <TextInput label="state" source="state" />
        <TextInput label="street" source="street" />
        <TextInput label="streetNumber" source="streetNumber" />
        <TextInput label="type" source="type" />
        <TextInput label="vat" source="vat" />
      </SimpleForm>
    </Edit>
  );
};
