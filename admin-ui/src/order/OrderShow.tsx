import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { PART_TITLE_FIELD } from "../part/PartTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { PROVIDER_TITLE_FIELD } from "../provider/ProviderTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { SHIPMENT_TITLE_FIELD } from "../shipment/ShipmentTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="accountId"
          source="account.id"
          reference="Account"
        >
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="billingAddress" source="billingAddress" />
        <TextField label="comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customNo" source="customNo" />
        <TextField label="estimatedDays" source="estimatedDays" />
        <TextField label="fees" source="fees" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="organizationId"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="shipmentId"
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
            <ReferenceField label="orderId" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="partId" source="part.id" reference="Part">
              <TextField source={PART_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="price" source="price" />
            <TextField label="quantity" source="quantity" />
            <TextField label="total" source="total" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Payment"
          target="OrderId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="accountId"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="orderId" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <TextField label="transactionId" source="transactionId" />
            <TextField label="transactionUserId" source="transactionUserId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Production"
          target="OrderId"
          label="Productions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <BooleanField label="discomformity" source="discomformity" />
            <TextField label="ID" source="id" />
            <ReferenceField label="orderId" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="partId" source="part.id" reference="Part">
              <TextField source={PART_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="providerId"
              source="provider.id"
              reference="Provider"
            >
              <TextField source={PROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
