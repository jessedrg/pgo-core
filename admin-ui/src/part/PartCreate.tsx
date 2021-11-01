import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { OfferTitle } from "../offer/OfferTitle";
import { PartConfigurationTitle } from "../partConfiguration/PartConfigurationTitle";
import { PartOnShapeTitle } from "../partOnShape/PartOnShapeTitle";

export const PartCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="offer.id" reference="Offer" label="offer">
          <SelectInput optionText={OfferTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="partconfiguration.id"
          reference="PartConfiguration"
          label="partConfiguration"
        >
          <SelectInput optionText={PartConfigurationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="partonshape.id"
          reference="PartOnShape"
          label="partOnShape"
        >
          <SelectInput optionText={PartOnShapeTitle} />
        </ReferenceInput>
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
