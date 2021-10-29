import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  SelectInput,
} from "react-admin";

export const ProductionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="discomformity" source="discomformity" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Pending", value: "pending" },
            { label: "Processing", value: "processing" },
            { label: "Shipped", value: "shipped" },
            { label: "Quality", value: "quality" },
            { label: "Completed", value: "completed" },
            { label: "Canceled", value: "canceled" },
            { label: "Rejected", value: "rejected" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
