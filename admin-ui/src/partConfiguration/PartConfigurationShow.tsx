import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PART_TITLE_FIELD } from "../part/PartTitle";

export const PartConfigurationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
