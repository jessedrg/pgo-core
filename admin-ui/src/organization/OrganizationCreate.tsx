import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AddressTitle } from "../address/AddressTitle";
import { AccountPaymentMethodTitle } from "../accountPaymentMethod/AccountPaymentMethodTitle";

export const OrganizationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="address.id"
          reference="Address"
          label="contactAdressId"
        >
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="accountpaymentmethod.id"
          reference="AccountPaymentMethod"
          label="paymenMethodId"
        >
          <SelectInput optionText={AccountPaymentMethodTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
