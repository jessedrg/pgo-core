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
        <BooleanInput label="active" source="active" />
        <TextInput label="email" source="email" type="email" />
        <DateTimeInput label="expiresAt" source="expiresAt" />
      </SimpleForm>
    </Edit>
  );
};
