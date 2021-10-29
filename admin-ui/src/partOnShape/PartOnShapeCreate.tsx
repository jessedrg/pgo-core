import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PartOnShapeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="did" source="did" />
        <TextInput label="eid" source="eid" />
        <TextInput label="wid" source="wid" />
      </SimpleForm>
    </Create>
  );
};
