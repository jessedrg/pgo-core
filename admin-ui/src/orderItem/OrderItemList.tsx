import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { PART_TITLE_FIELD } from "../part/PartTitle";

export const OrderItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OrderItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="orderId" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="partId" source="part.id" reference="Part">
          <TextField source={PART_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="price" source="price" />
        <TextField label="quantity" source="quantity" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
