import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PART_TITLE_FIELD } from "./PartTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { PRODUCTION_TITLE_FIELD } from "../production/ProductionTitle";
import { PROVIDER_TITLE_FIELD } from "../provider/ProviderTitle";
import { QUOTE_TITLE_FIELD } from "../quote/QuoteTitle";
import { MEDIAFILE_TITLE_FIELD } from "../mediaFile/MediaFileTitle";
import { OFFER_TITLE_FIELD } from "../offer/OfferTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { PARTCONFIGURATION_TITLE_FIELD } from "../partConfiguration/PartConfigurationTitle";
import { PARTONSHAPE_TITLE_FIELD } from "../partOnShape/PartOnShapeTitle";

export const PartShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Account" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Blueprint"
          source="mediafile.id"
          reference="MediaFile"
        >
          <TextField source={MEDIAFILE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Offer" source="offer.id" reference="Offer">
          <TextField source={OFFER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Original Blueprint"
          source="mediafile.id"
          reference="MediaFile"
        >
          <TextField source={MEDIAFILE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Original Model"
          source="mediafile.id"
          reference="MediaFile"
        >
          <TextField source={MEDIAFILE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Part Configuration"
          source="partconfiguration.id"
          reference="PartConfiguration"
        >
          <TextField source={PARTCONFIGURATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Part On Shape"
          source="partonshape.id"
          reference="PartOnShape"
        >
          <TextField source={PARTONSHAPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Parts Count" source="partsCount" />
        <TextField label="Process" source="process" />
        <TextField label="Quantities" source="quantities" />
        <TextField label="Status" source="status" />
        <ReferenceField
          label="Step Model"
          source="mediafile.id"
          reference="MediaFile"
        >
          <TextField source={MEDIAFILE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="STL Model"
          source="mediafile.id"
          reference="MediaFile"
        >
          <TextField source={MEDIAFILE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Surface" source="surface" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="Visible" source="visible" />
        <TextField label="Volume" source="volume" />
        <TextField label="Volume Bounding Box" source="volumeBoundingBox" />
        <TextField label="Volume Chips" source="volumeChips" />
        <TextField label="X" source="x" />
        <TextField label="Y" source="y" />
        <TextField label="Z" source="z" />
        <ReferenceManyField
          reference="PartMessage"
          target="PartId"
          label="PartMessages"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="message" source="message" />
            <ReferenceField label="part" source="part.id" reference="Part">
              <TextField source={PART_TITLE_FIELD} />
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
            <TextField label="UserType" source="userType" />
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
            <ReferenceField label="Part" source="part.id" reference="Part">
              <TextField source={PART_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Production"
              source="production.id"
              reference="Production"
            >
              <TextField source={PRODUCTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <TextField label="Shipped Quantity" source="shippedQuantity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="QuoteItem"
          target="PartId"
          label="QuoteItems"
        >
          <Datagrid rowClick="show">
            <TextField label="Construction Type" source="constructionType" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Margins" source="margins" />
            <ReferenceField label="Part" source="part.id" reference="Part">
              <TextField source={PART_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Production Days" source="productionDays" />
            <ReferenceField
              label="Provider"
              source="provider.id"
              reference="Provider"
            >
              <TextField source={PROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantities" source="quantities" />
            <ReferenceField label="Quote" source="quote.id" reference="Quote">
              <TextField source={QUOTE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
