import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  BooleanInput,
  SelectInput,
} from "react-admin";

export const ShipmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="courier" source="courier" />
        <NumberInput label="declaredValues" source="declaredValues" />
        <DateTimeInput label="delayedAt" source="delayedAt" />
        <DateTimeInput label="deliveredAt" source="deliveredAt" />
        <DateTimeInput label="estimatedAt" source="estimatedAt" />
        <BooleanInput label="partial" source="partial" />
        <TextInput label="realtedId" source="realtedId" />
        <TextInput label="relatedType" source="relatedType" />
        <DateTimeInput label="shippedAt" source="shippedAt" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Pending", value: "pending" },
            { label: "OnTransit", value: "OnTransit" },
            { label: "Delivered", value: "delivered" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="tracking" source="tracking" />
        <TextInput label="trackingUrl" source="trackingUrl" />
      </SimpleForm>
    </Create>
  );
};
