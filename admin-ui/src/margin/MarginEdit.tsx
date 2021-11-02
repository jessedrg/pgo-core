import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const MarginEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
