import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="company" source="company" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="locality" source="locality" />
        <TextField label="phone" source="phone" />
        <TextField label="phonePrefix" source="phonePrefix" />
        <TextField label="postalCode" source="postalCode" />
        <TextField label="state" source="state" />
        <TextField label="street" source="street" />
        <TextField label="streetNumber" source="streetNumber" />
        <TextField label="type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vat" source="vat" />
      </SimpleShowLayout>
    </Show>
  );
};
