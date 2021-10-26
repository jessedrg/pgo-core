import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AccountTitle } from "../account/AccountTitle";

export const AgentCreate = (props: CreateProps): React.ReactElement => {
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
      </SimpleForm>
    </Create>
  );
};
