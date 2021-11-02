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
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const AddressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Addresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Company" source="company" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Locality" source="locality" />
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Phone" source="phone" />
        <TextField label="Phone Prefix" source="phonePrefix" />
        <TextField label="Postal Code" source="postalCode" />
        <TextField label="State" source="state" />
        <TextField label="Street" source="street" />
        <TextField label="Street Number" source="streetNumber" />
        <TextField label="Type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Vat" source="vat" />
      </Datagrid>
    </List>
  );
};
