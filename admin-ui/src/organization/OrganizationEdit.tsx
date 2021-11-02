import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationPaymentMethodTitle } from "../organizationPaymentMethod/OrganizationPaymentMethodTitle";

export const OrganizationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
