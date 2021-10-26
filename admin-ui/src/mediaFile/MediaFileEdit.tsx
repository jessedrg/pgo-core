import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MediaFileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="type" source="type" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
