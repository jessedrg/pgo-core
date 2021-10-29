import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Pending", value: "pending" },
            { label: "Completed", value: "completed" },
            { label: "Rejected", value: "rejected" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="transactionId" source="transactionId" />
        <TextInput label="transactionUserId" source="transactionUserId" />
      </SimpleForm>
    </Create>
  );
};
