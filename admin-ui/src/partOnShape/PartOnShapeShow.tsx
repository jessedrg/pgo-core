import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { OFFER_TITLE_FIELD } from "../offer/OfferTitle";
import { PARTONSHAPE_TITLE_FIELD } from "./PartOnShapeTitle";
import { QUOTE_TITLE_FIELD } from "../quote/QuoteTitle";
import { PART_TITLE_FIELD } from "../part/PartTitle";

export const PartOnShapeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="did" source="did" />
        <TextField label="eid" source="eid" />
        <TextField label="ID" source="id" />
        <ReferenceField label="part" source="part.id" reference="Part">
          <TextField source={PART_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="wid" source="wid" />
        <ReferenceManyField
          reference="Part"
          target="PartOnShapeId"
          label="Parts"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="offer" source="offer.id" reference="Offer">
              <TextField source={OFFER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="partonshape"
              source="partonshape.id"
              reference="PartOnShape"
            >
              <TextField source={PARTONSHAPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="parts" source="parts" />
            <TextField label="process" source="process" />
            <TextField label="quantities" source="quantities" />
            <ReferenceField label="quote" source="quote.id" reference="Quote">
              <TextField source={QUOTE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <TextField label="surface" source="surface" />
            <DateField source="updatedAt" label="Updated At" />
            <BooleanField label="visible" source="visible" />
            <TextField label="volume" source="volume" />
            <TextField label="volumeBoundingBox" source="volumeBoundingBox" />
            <TextField label="volumeChips" source="volumeChips" />
            <TextField label="x" source="x" />
            <TextField label="y" source="y" />
            <TextField label="z" source="z" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
