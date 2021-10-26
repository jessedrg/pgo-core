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

import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { ACCOUNTPAYMENTMETHOD_TITLE_FIELD } from "./AccountPaymentMethodTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const AccountPaymentMethodShow = (
  props: ShowProps
): React.ReactElement => {
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
        <ReferenceManyField
          reference="Organization"
          target="AccountPaymentMethodId"
          label="Organizations"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
