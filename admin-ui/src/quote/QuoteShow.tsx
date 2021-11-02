import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PART_TITLE_FIELD } from "../part/PartTitle";
import { PROVIDER_TITLE_FIELD } from "../provider/ProviderTitle";
import { QUOTE_TITLE_FIELD } from "./QuoteTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";

export const QuoteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Account" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Completed At" source="completedAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Provider"
          source="provider.id"
          reference="Provider"
        >
          <TextField source={PROVIDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="QuoteItem"
          target="QuoteId"
          label="QuoteItems"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
