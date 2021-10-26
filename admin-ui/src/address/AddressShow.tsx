import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ADDRESS_TITLE_FIELD } from "./AddressTitle";
import { ACCOUNTPAYMENTMETHOD_TITLE_FIELD } from "../accountPaymentMethod/AccountPaymentMethodTitle";

export const AddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="company" source="company" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="locality" source="locality" />
        <TextField label="phone" source="phone" />
        <TextField label="phonePrefix" source="phonePrefix" />
        <TextField label="postalCode" source="postalCode" />
        <TextField label="state" source="state" />
        <TextField label="street" source="street" />
        <TextField label="streetNumber" source="streetNumber" />
        <TextField label="type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vat" source="vat" />
        <ReferenceManyField
          reference="Organization"
          target="AddressId"
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
