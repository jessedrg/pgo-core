import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { OFFER_TITLE_FIELD } from "../offer/OfferTitle";
import { PARTONSHAPE_TITLE_FIELD } from "../partOnShape/PartOnShapeTitle";
import { QUOTE_TITLE_FIELD } from "./QuoteTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { PROVIDER_TITLE_FIELD } from "../provider/ProviderTitle";

export const QuoteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="account" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="completedAt" source="completedAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="provider"
          source="provider.id"
          reference="Provider"
        >
          <TextField source={PROVIDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Part" target="QuoteId" label="Parts">
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
