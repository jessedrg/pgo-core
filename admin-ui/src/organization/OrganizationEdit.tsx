import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AddressTitle } from "../address/AddressTitle";
import { AccountPaymentMethodTitle } from "../accountPaymentMethod/AccountPaymentMethodTitle";

export const OrganizationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
