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
        <TextField label="Color Finish" source="colorFinish" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Finish" source="finish" />
        <TextField label="Hardness" source="hardness" />
        <TextField label="ID" source="id" />
        <TextField label="Material" source="material" />
        <TextField label="MaterialType" source="materialType" />
        <ReferenceField label="Part" source="part.id" reference="Part">
          <TextField source={PART_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Tech" source="tech" />
        <TextField label="Tolerance" source="tolerance" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Weight" source="weight" />
      </Datagrid>
    </List>
  );
};
