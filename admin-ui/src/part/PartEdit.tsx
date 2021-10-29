import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { OfferTitle } from "../offer/OfferTitle";
import { PartOnShapeTitle } from "../partOnShape/PartOnShapeTitle";
import { QuoteTitle } from "../quote/QuoteTitle";

export const PartEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="offer.id" reference="Offer" label="offer">
          <SelectInput optionText={OfferTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="partonshape.id"
          reference="PartOnShape"
          label="partonshape"
        >
          <SelectInput optionText={PartOnShapeTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="parts" source="parts" />
        <TextInput label="process" source="process" />
        <div />
        <ReferenceInput source="quote.id" reference="Quote" label="quote">
          <SelectInput optionText={QuoteTitle} />
        </ReferenceInput>
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
    </Edit>
  );
};
