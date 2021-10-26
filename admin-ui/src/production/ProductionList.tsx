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
import { PRODUCTION_TITLE_FIELD } from "./ProductionTitle";

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
        <ReferenceField
          label="parentId"
          source="production.id"
          reference="Production"
        >
          <TextField source={PRODUCTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
