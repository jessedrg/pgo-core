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
import { PRODUCTION_TITLE_FIELD } from "../production/ProductionTitle";
import { PAYMENT_TITLE_FIELD } from "../payment/PaymentTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Billing Address" source="billingAddress" />
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Custom Code" source="customCode" />
        <TextField label="Estimated Days" source="estimatedDays" />
        <TextField label="Fees" source="fees" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Payment" source="payment.id" reference="Payment">
          <TextField source={PAYMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Shipping Address" source="shippingaddress" />
        <TextField label="Status" source="status" />
        <TextField label="Subtotal" source="subtotal" />
        <TextField label="Taxes" source="taxes" />
        <TextField label="Total" source="total" />
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
        <ReferenceManyField
          reference="Shipment"
          target="OrderId"
          label="Shipments"
        >
          <Datagrid rowClick="show">
            <TextField label="Courier" source="courier" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Declared Values" source="declaredValues" />
            <TextField label="Delayed At" source="delayedAt" />
            <TextField label="Delivered At" source="deliveredAt" />
            <TextField label="Estimated At" source="estimatedAt" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Partial" source="partial" />
            <ReferenceField
              label="Production"
              source="production.id"
              reference="Production"
            >
              <TextField source={PRODUCTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Shipped At" source="shippedAt" />
            <TextField label="Status" source="status" />
            <TextField label="Tracking" source="tracking" />
            <TextField label="Tracking Url" source="trackingUrl" />
            <TextField label="Type" source="type" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
