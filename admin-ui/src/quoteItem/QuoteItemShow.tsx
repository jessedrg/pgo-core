import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PART_TITLE_FIELD } from "../part/PartTitle";
import { PROVIDER_TITLE_FIELD } from "../provider/ProviderTitle";

export const QuoteItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="basePrices" source="basePrices" />
        <TextField label="constructionType" source="constructionType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="margins" source="margins" />
        <ReferenceField label="part" source="part.id" reference="Part">
          <TextField source={PART_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="prices" source="prices" />
        <TextField label="productionDays" source="productionDays" />
        <ReferenceField
          label="provider"
          source="provider.id"
          reference="Provider"
        >
          <TextField source={PROVIDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="quantities" source="quantities" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
