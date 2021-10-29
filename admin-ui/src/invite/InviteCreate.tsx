import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const InviteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="active" source="active" />
        <TextInput label="email" source="email" type="email" />
        <DateTimeInput label="expiresAt" source="expiresAt" />
      </SimpleForm>
    </Create>
  );
};
