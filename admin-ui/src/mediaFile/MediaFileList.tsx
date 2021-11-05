import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MediaFileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MediaFiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="FileName" source="fileName" />
        <TextField label="ID" source="id" />
        <TextField label="Type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Url" source="url" />
      </Datagrid>
    </List>
  );
};
