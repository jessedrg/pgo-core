import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PartTitle } from "../part/PartTitle";

export const PartOnShapeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="did" source="did" />
        <TextInput label="eid" source="eid" />
        <ReferenceInput source="part.id" reference="Part" label="part">
          <SelectInput optionText={PartTitle} />
        </ReferenceInput>
        <TextInput label="wid" source="wid" />
      </SimpleForm>
    </Create>
  );
};
