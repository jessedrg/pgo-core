import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PART_TITLE_FIELD } from "../part/PartTitle";
import { PRODUCTION_TITLE_FIELD } from "../production/ProductionTitle";

export const ProductionItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
