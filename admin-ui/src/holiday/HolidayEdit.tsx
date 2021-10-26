import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const HolidayEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="day" source="day" />
      </SimpleForm>
    </Edit>
  );
};
