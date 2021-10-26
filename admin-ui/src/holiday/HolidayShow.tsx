import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { HOLIDAY_TITLE_FIELD } from "./HolidayTitle";

export const HolidayShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="day" source="day" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Provider"
          target="HolidayId"
          label="Providers"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
