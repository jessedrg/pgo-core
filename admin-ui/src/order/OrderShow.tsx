import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { PAYMENT_TITLE_FIELD } from "../payment/PaymentTitle";
import { SHIPMENT_TITLE_FIELD } from "../shipment/ShipmentTitle";

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
        <ReferenceField label="payment" source="payment.id" reference="Payment">
          <TextField source={PAYMENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="shipment"
          source="shipment.id"
          reference="Shipment"
        >
          <TextField source={SHIPMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="shippingaddress" source="shippingaddress" />
        <TextField label="state" source="state" />
        <TextField label="subtotal" source="subtotal" />
        <TextField label="taxes" source="taxes" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="OrderItem"
          target="OrderId"
          label="OrderItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Price" source="price" />
            <TextField label="Quantity" source="quantity" />
            <TextField label="Total" source="total" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Production"
          target="OrderId"
          label="Productions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <BooleanField label="Discomformity" source="discomformity" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
