import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PART_TITLE_FIELD } from "../part/PartTitle";

export const PartOnShapeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="did" source="did" />
        <TextField label="eid" source="eid" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Part" source="part.id" reference="Part">
          <TextField source={PART_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="wid" source="wid" />
      </SimpleShowLayout>
    </Show>
  );
};
