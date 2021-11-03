import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PartTitle } from "../part/PartTitle";
import { AccountTitle } from "../account/AccountTitle";

export const PartMessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" source="message" />
        <ReferenceInput source="part.id" reference="Part" label="part">
          <SelectInput optionText={PartTitle} />
        </ReferenceInput>
        <ReferenceInput source="account.id" reference="Account" label="sender">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <TextInput label="type" source="type" />
        <SelectInput
          source="userType"
          label="UserType"
          choices={[
            { label: "Agent", value: "Agent" },
            { label: "Client", value: "Client" },
            { label: "Provider", value: "Provider" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
