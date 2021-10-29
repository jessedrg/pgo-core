import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const OfferEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="customNo" multiline source="customNo" />
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
    </Edit>
  );
};
