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

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { MEDIAFILE_TITLE_FIELD } from "../mediaFile/MediaFileTitle";
import { OFFER_TITLE_FIELD } from "./OfferTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { PARTCONFIGURATION_TITLE_FIELD } from "../partConfiguration/PartConfigurationTitle";
import { PARTONSHAPE_TITLE_FIELD } from "../partOnShape/PartOnShapeTitle";

export const OfferShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Account" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Custom Number" source="customNumber" />
        <TextField label="ID" source="id" />
        <TextField label="Published At" source="publishedAt" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Part" target="OfferId" label="Parts">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
