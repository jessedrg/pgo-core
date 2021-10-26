import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AccountTitle } from "../account/AccountTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const AccountPaymentMethodEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="account.id"
          reference="Account"
          label="accountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <div />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="organizationId"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <TextInput label="type" source="type" />
      </SimpleForm>
    </Edit>
  );
};
