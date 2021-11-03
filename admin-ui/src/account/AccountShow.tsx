import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNT_TITLE_FIELD } from "./AccountTitle";
import { PART_TITLE_FIELD } from "../part/PartTitle";
import { MEDIAFILE_TITLE_FIELD } from "../mediaFile/MediaFileTitle";
import { OFFER_TITLE_FIELD } from "../offer/OfferTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { PARTCONFIGURATION_TITLE_FIELD } from "../partConfiguration/PartConfigurationTitle";
import { PARTONSHAPE_TITLE_FIELD } from "../partOnShape/PartOnShapeTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { PROVIDER_TITLE_FIELD } from "../provider/ProviderTitle";
import { AGENT_TITLE_FIELD } from "../agent/AgentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Offer" target="AccountId" label="Offers">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Custom Code" source="customCode" />
            <TextField label="ID" source="id" />
            <TextField label="Published At" source="publishedAt" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PartMessage"
          target="AccountId"
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
        <ReferenceManyField reference="Part" target="AccountId" label="Parts">
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
        <ReferenceManyField
          reference="Production"
          target="AccountId"
          label="Productions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <BooleanField label="Discomformity" source="discomformity" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Quote" target="AccountId" label="Quotes">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Completed At" source="completedAt" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Provider"
              source="provider.id"
              reference="Provider"
            >
              <TextField source={PROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
