import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const InviteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Invites"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="active" source="active" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="expiresAt" source="expiresAt" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
