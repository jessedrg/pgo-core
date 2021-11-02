import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PAYMENT_TITLE_FIELD } from "./PaymentTitle";

export const PaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Status" source="status" />
        <TextField label="Transaction Id" source="transactionId" />
        <TextField label="Transaction User Id" source="transactionUserId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Order" target="PaymentId" label="Orders">
          <Datagrid rowClick="show">
            <TextField label="Billing Address" source="billingAddress" />
            <TextField label="Comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Custom Code" source="customCode" />
            <TextField label="Estimated Days" source="estimatedDays" />
            <TextField label="Fees" source="fees" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Payment"
              source="payment.id"
              reference="Payment"
            >
              <TextField source={PAYMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Shipping Address" source="shippingaddress" />
            <TextField label="Status" source="status" />
            <TextField label="Subtotal" source="subtotal" />
            <TextField label="Taxes" source="taxes" />
            <TextField label="Total" source="total" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
