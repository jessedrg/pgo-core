import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const InviteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Active" source="active" />
        <TextInput label="Email" source="email" type="email" />
        <DateTimeInput label="Expires At" source="expiresAt" />
      </SimpleForm>
    </Edit>
  );
};
