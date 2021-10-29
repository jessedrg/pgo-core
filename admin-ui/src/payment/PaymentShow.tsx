import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { PAYMENT_TITLE_FIELD } from "./PaymentTitle";
import { SHIPMENT_TITLE_FIELD } from "../shipment/ShipmentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <TextField label="transactionId" source="transactionId" />
        <TextField label="transactionUserId" source="transactionUserId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Order" target="PaymentId" label="Orders">
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
