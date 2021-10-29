import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { PartTitle } from "../part/PartTitle";

export const PartConfigurationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="colorFinish" source="colorFinish" />
        <TextInput label="finish" source="finish" />
        <TextInput label="hardness" source="hardness" />
        <TextInput label="material" source="material" />
        <TextInput label="materialType" source="materialType" />
        <ReferenceInput source="part.id" reference="Part" label="part">
          <SelectInput optionText={PartTitle} />
        </ReferenceInput>
        <TextInput label="tech" source="tech" />
        <NumberInput label="tolerance" source="tolerance" />
        <NumberInput label="weight" source="weight" />
      </SimpleForm>
    </Edit>
  );
};
