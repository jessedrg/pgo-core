import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const QuoteItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="basePrices" source="basePrices" />
        <TextInput label="constructionType" source="constructionType" />
        <NumberInput label="margins" source="margins" />
        <NumberInput label="prices" source="prices" />
        <NumberInput step={1} label="productionDays" source="productionDays" />
        <NumberInput step={1} label="quantities" source="quantities" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Pending", value: "pending" },
            { label: "Completed", value: "completed" },
            { label: "Rejected", value: "rejected" },
            { label: "Canceled", value: "canceled" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
