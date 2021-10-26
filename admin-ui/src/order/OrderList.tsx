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
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
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
        <ReferenceField
          label="accountId"
          source="account.id"
          reference="Account"
        >
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="billingAddress" source="billingAddress" />
        <TextField label="comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customNo" source="customNo" />
        <TextField label="estimatedDays" source="estimatedDays" />
        <TextField label="fees" source="fees" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="organizationId"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="shipmentId"
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
