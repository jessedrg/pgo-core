import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { PartTitle } from "../part/PartTitle";

export const PartConfigurationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Color Finish" source="colorFinish" />
        <TextInput label="Finish" source="finish" />
        <TextInput label="Hardness" source="hardness" />
        <TextInput label="Material" source="material" />
        <TextInput label="MaterialType" source="materialType" />
        <ReferenceInput source="part.id" reference="Part" label="Part">
          <SelectInput optionText={PartTitle} />
        </ReferenceInput>
        <TextInput label="Tech" source="tech" />
        <NumberInput label="Tolerance" source="tolerance" />
        <NumberInput label="Weight" source="weight" />
      </SimpleForm>
    </Create>
  );
};
