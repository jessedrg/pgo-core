import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROVIDER_TITLE_FIELD } from "../provider/ProviderTitle";
import { QUOTE_TITLE_FIELD } from "../quote/QuoteTitle";

export const QuoteItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QuoteItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="basePrices" source="basePrices" />
        <TextField label="constructionType" source="constructionType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="margins" source="margins" />
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
        <ReferenceField label="quote" source="quote.id" reference="Quote">
          <TextField source={QUOTE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
