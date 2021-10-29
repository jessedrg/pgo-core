import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProviderTitle } from "../provider/ProviderTitle";

export const HolidayCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="day" source="day" />
        <ReferenceInput
          source="provider.id"
          reference="Provider"
          label="Providers"
        >
          <SelectInput optionText={ProviderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
