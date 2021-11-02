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
        <BooleanInput label="Active" source="active" />
        <TextInput label="Email" source="email" type="email" />
        <DateTimeInput label="Expires At" source="expiresAt" />
      </SimpleForm>
    </Create>
  );
};
