import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="authMethod" source="authMethod" />
        <TextInput label="sessionToken" source="sessionToken" />
      </SimpleForm>
    </Edit>
  );
};
