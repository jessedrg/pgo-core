import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ShipmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Shipments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="courier" source="courier" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="declaredValues" source="declaredValues" />
        <TextField label="delayedAt" source="delayedAt" />
        <TextField label="deliveredAt" source="deliveredAt" />
        <TextField label="estimatedAt" source="estimatedAt" />
        <TextField label="ID" source="id" />
        <BooleanField label="partial" source="partial" />
        <TextField label="realtedId" source="realtedId" />
        <TextField label="relatedType" source="relatedType" />
        <TextField label="shippedAt" source="shippedAt" />
        <TextField label="status" source="status" />
        <TextField label="tracking" source="tracking" />
        <TextField label="trackingUrl" source="trackingUrl" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
