import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const PaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Payments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="accountId"
          source="account.id"
          reference="Account"
        >
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="orderId" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <TextField label="transactionId" source="transactionId" />
        <TextField label="transactionUserId" source="transactionUserId" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
