import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="authMethod" source="authMethod" />
        <TextInput label="sessionToken" source="sessionToken" />
      </SimpleForm>
    </Create>
  );
};
