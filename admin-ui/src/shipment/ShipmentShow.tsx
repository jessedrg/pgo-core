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
      </SimpleShowLayout>
    </Show>
  );
};
