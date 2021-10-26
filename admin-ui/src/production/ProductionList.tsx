import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  BooleanField,
  TextField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { PART_TITLE_FIELD } from "../part/PartTitle";
import { PROVIDER_TITLE_FIELD } from "../provider/ProviderTitle";

export const ProductionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Productions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
