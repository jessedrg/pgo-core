import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PartMessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="message" source="message" />
        <TextInput label="messageType" source="messageType" />
        <TextInput label="type" source="type" />
      </SimpleForm>
    </Edit>
  );
};
