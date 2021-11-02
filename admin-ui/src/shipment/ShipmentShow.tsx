import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { PRODUCTION_TITLE_FIELD } from "../production/ProductionTitle";

export const ShipmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
