import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProviderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="currency" source="currency" />
        <TextInput label="dateFormat" source="dateFormat" />
        <TextInput label="name" source="name" />
        <NumberInput label="rating" source="rating" />
        <div />
        <NumberInput step={1} label="shippmentDates" source="shippmentDates" />
        <div />
        <TextInput label="type" source="type" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
