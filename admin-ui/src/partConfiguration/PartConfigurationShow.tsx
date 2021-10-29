import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PartConfigurationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="colorFinish" source="colorFinish" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="finish" source="finish" />
        <TextField label="hardness" source="hardness" />
        <TextField label="ID" source="id" />
        <TextField label="material" source="material" />
        <TextField label="materialType" source="materialType" />
        <TextField label="tech" source="tech" />
        <TextField label="tolerance" source="tolerance" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weight" source="weight" />
      </SimpleShowLayout>
    </Show>
  );
};
