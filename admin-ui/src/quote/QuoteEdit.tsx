import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  SelectArrayInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { ProviderTitle } from "../provider/ProviderTitle";

export const QuoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <DateTimeInput label="completedAt" source="completedAt" />
        <ReferenceInput
          source="provider.id"
          reference="Provider"
          label="provider"
        >
          <SelectInput optionText={ProviderTitle} />
        </ReferenceInput>
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
