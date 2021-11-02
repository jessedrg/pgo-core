import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationPaymentMethodTitle } from "../organizationPaymentMethod/OrganizationPaymentMethodTitle";

export const OrganizationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="organizationpaymentmethod.id"
          reference="OrganizationPaymentMethod"
          label="Payment Method"
        >
          <SelectInput optionText={OrganizationPaymentMethodTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
