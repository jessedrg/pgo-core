import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { PartTitle } from "../part/PartTitle";

export const OfferCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="account.id"
          reference="Account"
          label="accountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <TextInput label="customNo" multiline source="customNo" />
        <ReferenceInput source="part.id" reference="Part" label="partId">
          <SelectInput optionText={PartTitle} />
        </ReferenceInput>
        <DateTimeInput label="publishedAt" source="publishedAt" />
        <SelectInput
          source="status"
          label="status"
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
    </Create>
  );
};
