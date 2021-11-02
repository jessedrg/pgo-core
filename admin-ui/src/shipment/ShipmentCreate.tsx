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
        <TextInput label="Courier" source="courier" />
        <NumberInput label="Declared Values" source="declaredValues" />
        <DateTimeInput label="Delayed At" source="delayedAt" />
        <DateTimeInput label="Delivered At" source="deliveredAt" />
        <DateTimeInput label="Estimated At" source="estimatedAt" />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <BooleanInput label="Partial" source="partial" />
        <ReferenceInput
          source="production.id"
          reference="Production"
          label="Production"
        >
          <SelectInput optionText={ProductionTitle} />
        </ReferenceInput>
        <DateTimeInput label="Shipped At" source="shippedAt" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Pending", value: "pending" },
            { label: "OnTransit", value: "OnTransit" },
            { label: "Delivered", value: "delivered" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Tracking" source="tracking" />
        <TextInput label="Tracking Url" source="trackingUrl" />
        <SelectInput
          source="type"
          label="Type"
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
