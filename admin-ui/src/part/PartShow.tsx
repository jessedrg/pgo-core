import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PART_TITLE_FIELD } from "./PartTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { PROVIDER_TITLE_FIELD } from "../provider/ProviderTitle";
import { OFFER_TITLE_FIELD } from "../offer/OfferTitle";
import { PARTONSHAPE_TITLE_FIELD } from "../partOnShape/PartOnShapeTitle";
import { QUOTE_TITLE_FIELD } from "../quote/QuoteTitle";

export const PartShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="PartConfiguration"
          target="PartId"
          label="PartConfigurations"
        >
          <Datagrid rowClick="show">
            <TextField label="colorFinish" source="colorFinish" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="finish" source="finish" />
            <TextField label="hardness" source="hardness" />
            <TextField label="ID" source="id" />
            <TextField label="material" source="material" />
            <TextField label="materialType" source="materialType" />
            <ReferenceField label="part" source="part.id" reference="Part">
              <TextField source={PART_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="tech" source="tech" />
            <TextField label="tolerance" source="tolerance" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="weight" source="weight" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PartMessage"
          target="PartId"
          label="PartMessages"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="message" source="message" />
            <TextField label="messageType" source="messageType" />
            <ReferenceField label="part" source="part.id" reference="Part">
              <TextField source={PART_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="reciever"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="sender"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="type" source="type" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PartOnShape"
          target="PartId"
          label="PartOnShapes"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="did" source="did" />
            <TextField label="eid" source="eid" />
            <TextField label="ID" source="id" />
            <ReferenceField label="part" source="part.id" reference="Part">
              <TextField source={PART_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="wid" source="wid" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductionItem"
          target="PartId"
          label="ProductionItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="part" source="part.id" reference="Part">
              <TextField source={PART_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantity" source="quantity" />
            <TextField label="shippedQuantity" source="shippedQuantity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="QuoteItem"
          target="PartId"
          label="QuoteItems"
        >
          <Datagrid rowClick="show">
            <TextField label="basePrices" source="basePrices" />
            <TextField label="constructionType" source="constructionType" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="margins" source="margins" />
            <ReferenceField label="part" source="part.id" reference="Part">
              <TextField source={PART_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="prices" source="prices" />
            <TextField label="productionDays" source="productionDays" />
            <ReferenceField
              label="provider"
              source="provider.id"
              reference="Provider"
            >
              <TextField source={PROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantities" source="quantities" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
