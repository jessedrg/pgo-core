import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MediaFileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="type" source="type" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
