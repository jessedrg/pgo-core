import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  SelectArrayInput,
} from "react-admin";

export const QuoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="completedAt" source="completedAt" />
        <SelectArrayInput
          label="status"
          source="status"
          choices={[
            { label: "Pending", value: "pending" },
            { label: "Completed", value: "completed" },
            { label: "Canceled", value: "canceled" },
            { label: "Rejected", value: "rejected" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
