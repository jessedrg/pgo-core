import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { OFFER_TITLE_FIELD } from "./OfferTitle";
import { PARTCONFIGURATION_TITLE_FIELD } from "../partConfiguration/PartConfigurationTitle";
import { PARTONSHAPE_TITLE_FIELD } from "../partOnShape/PartOnShapeTitle";

export const OfferShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="customNo" source="customNo" />
        <TextField label="ID" source="id" />
        <TextField label="publishedAt" source="publishedAt" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Part" target="OfferId" label="Parts">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="offer" source="offer.id" reference="Offer">
              <TextField source={OFFER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="partConfiguration"
              source="partconfiguration.id"
              reference="PartConfiguration"
            >
              <TextField source={PARTCONFIGURATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="partOnShape"
              source="partonshape.id"
              reference="PartOnShape"
            >
              <TextField source={PARTONSHAPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="parts" source="parts" />
            <TextField label="process" source="process" />
            <TextField label="quantities" source="quantities" />
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
