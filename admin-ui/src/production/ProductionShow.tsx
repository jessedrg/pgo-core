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

import { PART_TITLE_FIELD } from "../part/PartTitle";
import { PRODUCTION_TITLE_FIELD } from "./ProductionTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { PROVIDER_TITLE_FIELD } from "../provider/ProviderTitle";

export const ProductionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="discomformity" source="discomformity" />
        <TextField label="ID" source="id" />
        <ReferenceField label="orderId" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="partId" source="part.id" reference="Part">
          <TextField source={PART_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="providerId"
          source="provider.id"
          reference="Provider"
        >
          <TextField source={PROVIDER_TITLE_FIELD} />
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
            <ReferenceField label="partId" source="part.id" reference="Part">
              <TextField source={PART_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="productionId"
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
      </SimpleShowLayout>
    </Show>
  );
};
