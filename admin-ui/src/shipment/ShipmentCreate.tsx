import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { ProductionTitle } from "../production/ProductionTitle";

export const ShipmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="courier" source="courier" />
        <NumberInput label="declaredValues" source="declaredValues" />
        <DateTimeInput label="delayedAt" source="delayedAt" />
        <DateTimeInput label="deliveredAt" source="deliveredAt" />
        <DateTimeInput label="estimatedAt" source="estimatedAt" />
        <ReferenceInput source="order.id" reference="Order" label="order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <BooleanInput label="partial" source="partial" />
        <ReferenceInput
          source="production.id"
          reference="Production"
          label="production"
        >
          <SelectInput optionText={ProductionTitle} />
        </ReferenceInput>
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
        <SelectInput
          source="type"
          label="type"
          choices={[
            { label: "Production", value: "production" },
            { label: "Order", value: "order" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
