import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PartOnShapeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="did" source="did" />
        <TextInput label="eid" source="eid" />
        <TextInput label="wid" source="wid" />
      </SimpleForm>
    </Edit>
  );
};
