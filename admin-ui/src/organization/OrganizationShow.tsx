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
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { ORGANIZATION_TITLE_FIELD } from "./OrganizationTitle";
import { SHIPMENT_TITLE_FIELD } from "../shipment/ShipmentTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { ACCOUNTPAYMENTMETHOD_TITLE_FIELD } from "../accountPaymentMethod/AccountPaymentMethodTitle";

export const OrganizationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="contactAdressId"
          source="address.id"
          reference="Address"
        >
          <TextField source={ADDRESS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <ReferenceField
          label="paymenMethodId"
          source="accountpaymentmethod.id"
          reference="AccountPaymentMethod"
        >
          <TextField source={ACCOUNTPAYMENTMETHOD_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AccountPaymentMethod"
          target="OrganizationId"
          label="AccountPaymentMethods"
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
            <TextField label="data" source="data" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="organizationId"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="type" source="type" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Order"
          target="OrganizationId"
          label="Orders"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="User"
          target="OrganizationId"
          label="Users"
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
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <ReferenceField
              label="organizationId"
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
