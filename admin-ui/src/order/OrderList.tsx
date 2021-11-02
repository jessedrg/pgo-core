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
import { SHIPMENT_TITLE_FIELD } from "../shipment/ShipmentTitle";

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
        <TextField label="billingAddress" source="billingAddress" />
        <TextField label="comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customNo" source="customNo" />
        <TextField label="estimatedDays" source="estimatedDays" />
        <TextField label="fees" source="fees" />
        <TextField label="ID" source="id" />
        <ReferenceField label="payment" source="payment.id" reference="Payment">
          <TextField source={PAYMENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="shipment"
          source="shipment.id"
          reference="Shipment"
        >
          <TextField source={SHIPMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="shippingaddress" source="shippingaddress" />
        <TextField label="state" source="state" />
        <TextField label="subtotal" source="subtotal" />
        <TextField label="taxes" source="taxes" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
