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
import { PART_TITLE_FIELD } from "../part/PartTitle";

export const PartConfigurationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PartConfigurations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="colorFinish" source="colorFinish" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="finish" source="finish" />
        <TextField label="hardness" source="hardness" />
        <TextField label="ID" source="id" />
        <TextField label="material" source="material" />
        <TextField label="materialType" source="materialType" />
        <ReferenceField label="part" source="part.id" reference="Part">
          <TextField source={PART_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="tech" source="tech" />
        <TextField label="tolerance" source="tolerance" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weight" source="weight" />
      </Datagrid>
    </List>
  );
};
