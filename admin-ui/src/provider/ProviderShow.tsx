import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ProviderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="dateFormat" source="dateFormat" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="rating" source="rating" />
        <TextField label="ratingData" source="ratingData" />
        <TextField label="shippmentDates" source="shippmentDates" />
        <TextField label="techologies" source="technologies" />
        <TextField label="typeson" source="typeson" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="workingDays" source="workingDays" />
      </SimpleShowLayout>
    </Show>
  );
};
