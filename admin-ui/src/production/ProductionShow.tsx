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

import { PART_TITLE_FIELD } from "../part/PartTitle";
import { PRODUCTION_TITLE_FIELD } from "./ProductionTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";

export const ProductionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Account" source="account.id" reference="Account">
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
        <ReferenceManyField
          reference="ProductionItem"
          target="ProductionId"
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
          reference="Shipment"
          target="ProductionId"
          label="Shipments"
        >
          <Datagrid rowClick="show">
            <TextField label="Courier" source="courier" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Declared Values" source="declaredValues" />
            <TextField label="Delayed At" source="delayedAt" />
            <TextField label="Delivered At" source="deliveredAt" />
            <TextField label="Estimated At" source="estimatedAt" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Partial" source="partial" />
            <ReferenceField
              label="Production"
              source="production.id"
              reference="Production"
            >
              <TextField source={PRODUCTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Shipped At" source="shippedAt" />
            <TextField label="Status" source="status" />
            <TextField label="Tracking" source="tracking" />
            <TextField label="Tracking Url" source="trackingUrl" />
            <TextField label="Type" source="type" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
