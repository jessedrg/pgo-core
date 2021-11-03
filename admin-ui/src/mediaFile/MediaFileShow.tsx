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

import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { MEDIAFILE_TITLE_FIELD } from "./MediaFileTitle";
import { OFFER_TITLE_FIELD } from "../offer/OfferTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { PARTCONFIGURATION_TITLE_FIELD } from "../partConfiguration/PartConfigurationTitle";
import { PARTONSHAPE_TITLE_FIELD } from "../partOnShape/PartOnShapeTitle";

export const MediaFileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="FileName" source="fileName" />
        <TextField label="ID" source="id" />
        <TextField label="Type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Url" source="url" />
        <ReferenceManyField reference="Part" target="MediaFileId" label="Parts">
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
        <ReferenceManyField reference="Part" target="MediaFileId" label="Parts">
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
        <ReferenceManyField reference="Part" target="MediaFileId" label="Parts">
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
        <ReferenceManyField reference="Part" target="MediaFileId" label="Parts">
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
        <ReferenceManyField reference="Part" target="MediaFileId" label="Parts">
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
