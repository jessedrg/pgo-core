import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";

export const InviteEdit = (props: EditProps): React.ReactElement => {
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
        <BooleanInput label="active" source="active" />
        <TextInput label="email" source="email" type="email" />
        <DateTimeInput label="expiresAt" source="expiresAt" />
      </SimpleForm>
    </Edit>
  );
};
