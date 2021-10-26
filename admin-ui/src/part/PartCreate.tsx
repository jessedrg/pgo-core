import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

export const PartCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="parts" source="parts" />
        <TextInput label="process" source="process" />
        <div />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Draft", value: "draft" },
            { label: "Pending", value: "pending" },
            { label: "Rejected", value: "rejected" },
            { label: "Publish", value: "publish" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="surface" source="surface" />
        <BooleanInput label="visible" source="visible" />
        <NumberInput label="volume" source="volume" />
        <NumberInput label="volumeBoundingBox" source="volumeBoundingBox" />
        <NumberInput label="volumeChips" source="volumeChips" />
        <NumberInput label="x" source="x" />
        <NumberInput label="y" source="y" />
        <NumberInput label="z" source="z" />
      </SimpleForm>
    </Create>
  );
};
