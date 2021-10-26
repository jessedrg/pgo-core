import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  SelectArrayInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { ShipmentTitle } from "../shipment/ShipmentTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="account.id"
          reference="Account"
          label="accountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="comment" source="comment" />
        <TextInput label="customNo" source="customNo" />
        <NumberInput step={1} label="estimatedDays" source="estimatedDays" />
        <div />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="organizationId"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="shipment.id"
          reference="Shipment"
          label="shipmentId"
        >
          <SelectInput optionText={ShipmentTitle} />
        </ReferenceInput>
        <div />
        <SelectArrayInput
          label="state"
          source="state"
          choices={[
            { label: "OnHold", value: "onHold" },
            { label: "Failed", value: "failed" },
            { label: "Processing", value: "processing" },
            { label: "Production", value: "production" },
            { label: "Quality", value: "quality" },
            { label: "Shipped", value: "shipped" },
            { label: "Completed", value: "completed" },
            { label: "Cancelled", value: "cancelled" },
            { label: "Refound", value: "refound" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput label="subtotal" source="subtotal" />
        <div />
        <NumberInput label="total" source="total" />
      </SimpleForm>
    </Create>
  );
};
