import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AccountTitle } from "../account/AccountTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const AccountPaymentMethodCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
