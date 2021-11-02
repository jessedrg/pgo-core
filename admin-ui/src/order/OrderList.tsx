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
import { PAYMENT_TITLE_FIELD } from "../payment/PaymentTitle";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Billing Address" source="billingAddress" />
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Custom Code" source="customCode" />
        <TextField label="Estimated Days" source="estimatedDays" />
        <TextField label="Fees" source="fees" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Payment" source="payment.id" reference="Payment">
          <TextField source={PAYMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Shipping Address" source="shippingaddress" />
        <TextField label="Status" source="status" />
        <TextField label="Subtotal" source="subtotal" />
        <TextField label="Taxes" source="taxes" />
        <TextField label="Total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
