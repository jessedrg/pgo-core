import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { PAYMENT_TITLE_FIELD } from "../payment/PaymentTitle";
import { SHIPMENT_TITLE_FIELD } from "./ShipmentTitle";

export const ShipmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="courier" source="courier" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="declaredValues" source="declaredValues" />
        <TextField label="delayedAt" source="delayedAt" />
        <TextField label="deliveredAt" source="deliveredAt" />
        <TextField label="estimatedAt" source="estimatedAt" />
        <TextField label="ID" source="id" />
        <BooleanField label="partial" source="partial" />
        <TextField label="realtedId" source="realtedId" />
        <TextField label="relatedType" source="relatedType" />
        <TextField label="shippedAt" source="shippedAt" />
        <TextField label="status" source="status" />
        <TextField label="tracking" source="tracking" />
        <TextField label="trackingUrl" source="trackingUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Order"
          target="ShipmentId"
          label="Orders"
        >
          <Datagrid rowClick="show">
            <TextField label="billingAddress" source="billingAddress" />
            <TextField label="comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="customNo" source="customNo" />
            <TextField label="estimatedDays" source="estimatedDays" />
            <TextField label="fees" source="fees" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="payment"
              source="payment.id"
              reference="Payment"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
