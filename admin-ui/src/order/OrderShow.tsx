import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="billingAddress" source="billingAddress" />
        <TextField label="comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customNo" source="customNo" />
        <TextField label="estimatedDays" source="estimatedDays" />
        <TextField label="fees" source="fees" />
        <TextField label="ID" source="id" />
        <TextField label="shippingaddress" source="shippingaddress" />
        <TextField label="state" source="state" />
        <TextField label="subtotal" source="subtotal" />
        <TextField label="taxes" source="taxes" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
