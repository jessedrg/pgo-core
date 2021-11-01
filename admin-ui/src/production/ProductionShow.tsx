import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  BooleanField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PRODUCTION_TITLE_FIELD } from "./ProductionTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const ProductionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="discomformity" source="discomformity" />
        <TextField label="ID" source="id" />
        <ReferenceField label="order" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ProductionItem"
          target="ProductionId"
          label="ProductionItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="production"
              source="production.id"
              reference="Production"
            >
              <TextField source={PRODUCTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantity" source="quantity" />
            <TextField label="shippedQuantity" source="shippedQuantity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Shipment"
          target="ProductionId"
          label="Shipments"
        >
          <Datagrid rowClick="show">
            <TextField label="courier" source="courier" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="declaredValues" source="declaredValues" />
            <TextField label="delayedAt" source="delayedAt" />
            <TextField label="deliveredAt" source="deliveredAt" />
            <TextField label="estimatedAt" source="estimatedAt" />
            <TextField label="ID" source="id" />
            <ReferenceField label="order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="partial" source="partial" />
            <ReferenceField
              label="production"
              source="production.id"
              reference="Production"
            >
              <TextField source={PRODUCTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="shippedAt" source="shippedAt" />
            <TextField label="status" source="status" />
            <TextField label="tracking" source="tracking" />
            <TextField label="trackingUrl" source="trackingUrl" />
            <TextField label="type" source="type" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
