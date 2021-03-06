import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MediaFileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="FileName" source="fileName" />
        <TextInput label="Type" source="type" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
