import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORGANIZATION_TITLE_FIELD } from "./OrganizationTitle";
import { PAYMENT_TITLE_FIELD } from "../payment/PaymentTitle";
import { SHIPMENT_TITLE_FIELD } from "../shipment/ShipmentTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";

export const OrganizationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="addres" source="addres" />
        <ReferenceField label="address" source="address.id" reference="Address">
          <TextField source={ADDRESS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Order"
          target="OrganizationId"
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
        <ReferenceManyField
          reference="User"
          target="OrganizationId"
          label="Users"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <ReferenceField
              label="organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
