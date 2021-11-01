import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProviderTitle } from "../provider/ProviderTitle";
import { QuoteTitle } from "../quote/QuoteTitle";

export const QuoteItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="basePrices" source="basePrices" />
        <TextInput label="constructionType" source="constructionType" />
        <NumberInput label="margins" source="margins" />
        <NumberInput label="prices" source="prices" />
        <NumberInput step={1} label="productionDays" source="productionDays" />
        <ReferenceInput
          source="provider.id"
          reference="Provider"
          label="provider"
        >
          <SelectInput optionText={ProviderTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantities" source="quantities" />
        <ReferenceInput source="quote.id" reference="Quote" label="quote">
          <SelectInput optionText={QuoteTitle} />
        </ReferenceInput>
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
    </Edit>
  );
};
