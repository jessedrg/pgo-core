import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const PartConfigurationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="colorFinish" source="colorFinish" />
        <TextInput label="finish" source="finish" />
        <TextInput label="hardness" source="hardness" />
        <TextInput label="material" source="material" />
        <TextInput label="materialType" source="materialType" />
        <TextInput label="tech" source="tech" />
        <NumberInput label="tolerance" source="tolerance" />
        <NumberInput label="weight" source="weight" />
      </SimpleForm>
    </Create>
  );
};
