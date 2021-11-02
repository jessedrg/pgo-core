import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";

export const OfferEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <TextInput label="Custom Number" multiline source="customNumber" />
        <DateTimeInput label="Published At" source="publishedAt" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Draft", value: "draft" },
            { label: "Pending", value: "pending" },
            { label: "Publish", value: "publish" },
            { label: "Rejected", value: "rejected" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
