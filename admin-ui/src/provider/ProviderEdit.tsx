import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { HolidayTitle } from "../holiday/HolidayTitle";

export const ProviderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
