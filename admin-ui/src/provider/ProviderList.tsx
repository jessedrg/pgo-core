import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { HOLIDAY_TITLE_FIELD } from "../holiday/HolidayTitle";

export const ProviderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Providers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="dateFormat" source="dateFormat" />
        <ReferenceField
          label="holidaysId"
          source="holiday.id"
          reference="Holiday"
        >
          <TextField source={HOLIDAY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="rating" source="rating" />
        <TextField label="ratingData" source="ratingData" />
        <TextField label="shippmentDates" source="shippmentDates" />
        <TextField label="techologies" source="technologies" />
        <TextField label="typeson" source="typeson" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="workingDays" source="workingDays" />
      </Datagrid>
    </List>
  );
};
