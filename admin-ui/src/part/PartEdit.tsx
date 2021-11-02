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

import { AccountTitle } from "../account/AccountTitle";
import { MediaFileTitle } from "../mediaFile/MediaFileTitle";
import { OfferTitle } from "../offer/OfferTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { PartConfigurationTitle } from "../partConfiguration/PartConfigurationTitle";
import { PartOnShapeTitle } from "../partOnShape/PartOnShapeTitle";

export const PartEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="mediafile.id"
          reference="MediaFile"
          label="Blueprint"
        >
          <SelectInput optionText={MediaFileTitle} />
        </ReferenceInput>
        <ReferenceInput source="offer.id" reference="Offer" label="Offer">
          <SelectInput optionText={OfferTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="mediafile.id"
          reference="MediaFile"
          label="Original Blueprint"
        >
          <SelectInput optionText={MediaFileTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="mediafile.id"
          reference="MediaFile"
          label="Original Model"
        >
          <SelectInput optionText={MediaFileTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="partconfiguration.id"
          reference="PartConfiguration"
          label="Part Configuration"
        >
          <SelectInput optionText={PartConfigurationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="partonshape.id"
          reference="PartOnShape"
          label="Part On Shape"
        >
          <SelectInput optionText={PartOnShapeTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Parts Count" source="partsCount" />
        <TextInput label="Process" source="process" />
        <div />
        <SelectInput
          source="status"
          label="Status"
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
        <ReferenceInput
          source="mediafile.id"
          reference="MediaFile"
          label="Step Model"
        >
          <SelectInput optionText={MediaFileTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="mediafile.id"
          reference="MediaFile"
          label="STL Model"
        >
          <SelectInput optionText={MediaFileTitle} />
        </ReferenceInput>
        <NumberInput label="Surface" source="surface" />
        <BooleanInput label="Visible" source="visible" />
        <NumberInput label="Volume" source="volume" />
        <NumberInput label="Volume Bounding Box" source="volumeBoundingBox" />
        <NumberInput label="Volume Chips" source="volumeChips" />
        <NumberInput label="X" source="x" />
        <NumberInput label="Y" source="y" />
        <NumberInput label="Z" source="z" />
      </SimpleForm>
    </Edit>
  );
};
