import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

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
        <TextField label="company" source="company" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="locality" source="locality" />
        <TextField label="phone" source="phone" />
        <TextField label="phonePrefix" source="phonePrefix" />
        <TextField label="postalCode" source="postalCode" />
        <TextField label="state" source="state" />
        <TextField label="street" source="street" />
        <TextField label="streetNumber" source="streetNumber" />
        <TextField label="type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vat" source="vat" />
      </Datagrid>
    </List>
  );
};
