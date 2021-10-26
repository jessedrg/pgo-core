import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
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
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="organizationId"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
