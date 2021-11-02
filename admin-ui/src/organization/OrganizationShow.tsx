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

import { AGENT_TITLE_FIELD } from "../agent/AgentTitle";
import { ORGANIZATION_TITLE_FIELD } from "./OrganizationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { MEDIAFILE_TITLE_FIELD } from "../mediaFile/MediaFileTitle";
import { OFFER_TITLE_FIELD } from "../offer/OfferTitle";
import { PARTCONFIGURATION_TITLE_FIELD } from "../partConfiguration/PartConfigurationTitle";
import { PARTONSHAPE_TITLE_FIELD } from "../partOnShape/PartOnShapeTitle";
import { ORGANIZATIONPAYMENTMETHOD_TITLE_FIELD } from "../organizationPaymentMethod/OrganizationPaymentMethodTitle";

export const OrganizationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Payment Method"
          source="organizationpaymentmethod.id"
          reference="OrganizationPaymentMethod"
        >
          <TextField source={ORGANIZATIONPAYMENTMETHOD_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Account"
          target="OrganizationId"
          label="Accounts"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Active" source="active" />
            <ReferenceField label="Agent" source="agent.id" reference="Agent">
              <TextField source={AGENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Configuration" source="configuration" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Address"
          target="OrganizationId"
          label="Addresses"
        >
          <Datagrid rowClick="show">
            <TextField label="Company" source="company" />
            <TextField label="Country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Locality" source="locality" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Phone" source="phone" />
            <TextField label="Phone Prefix" source="phonePrefix" />
            <TextField label="Postal Code" source="postalCode" />
            <TextField label="State" source="state" />
            <TextField label="Street" source="street" />
            <TextField label="Street Number" source="streetNumber" />
            <TextField label="Type" source="type" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Vat" source="vat" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Part"
          target="OrganizationId"
          label="Parts"
        >
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
