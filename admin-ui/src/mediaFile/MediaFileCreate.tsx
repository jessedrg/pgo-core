import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MediaFileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="FileName" source="fileName" />
        <TextInput label="Type" source="type" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
