import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { HolidayTitle } from "../holiday/HolidayTitle";

export const ProviderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="currency" source="currency" />
        <TextInput label="dateFormat" source="dateFormat" />
        <ReferenceInput
          source="holiday.id"
          reference="Holiday"
          label="holidaysId"
        >
          <SelectInput optionText={HolidayTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <NumberInput label="rating" source="rating" />
        <div />
        <NumberInput step={1} label="shippmentDates" source="shippmentDates" />
        <div />
        <TextInput label="typeson" source="typeson" />
        <div />
      </SimpleForm>
    </Create>
  );
};
