import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProviderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="currency" source="currency" />
        <TextInput label="dateFormat" source="dateFormat" />
        <TextInput label="name" source="name" />
        <NumberInput label="rating" source="rating" />
        <div />
        <NumberInput step={1} label="shippmentDays" source="shipmentDays" />
        <div />
        <TextInput label="type" source="type" />
        <div />
      </SimpleForm>
    </Create>
  );
};
