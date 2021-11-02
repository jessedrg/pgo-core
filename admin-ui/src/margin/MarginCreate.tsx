import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const MarginCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
