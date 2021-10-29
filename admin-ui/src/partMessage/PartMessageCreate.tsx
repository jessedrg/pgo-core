import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PartMessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" source="message" />
        <TextInput label="messageType" source="messageType" />
        <TextInput label="type" source="type" />
      </SimpleForm>
    </Create>
  );
};
