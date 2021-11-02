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
import { QUOTE_TITLE_FIELD } from "../quote/QuoteTitle";

export const QuoteItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Construction Type" source="constructionType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Margins" source="margins" />
        <ReferenceField label="Part" source="part.id" reference="Part">
          <TextField source={PART_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Production Days" source="productionDays" />
        <ReferenceField
          label="Provider"
          source="provider.id"
          reference="Provider"
        >
          <TextField source={PROVIDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="quantities" source="quantities" />
        <ReferenceField label="Quote" source="quote.id" reference="Quote">
          <TextField source={QUOTE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
