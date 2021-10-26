import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const HolidayCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="day" source="day" />
      </SimpleForm>
    </Create>
  );
};
