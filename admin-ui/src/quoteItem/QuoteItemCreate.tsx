import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PartTitle } from "../part/PartTitle";
import { ProviderTitle } from "../provider/ProviderTitle";

export const QuoteItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="basePrices" source="basePrices" />
        <TextInput label="constructionType" source="constructionType" />
        <NumberInput label="margins" source="margins" />
        <ReferenceInput source="part.id" reference="Part" label="partId">
          <SelectInput optionText={PartTitle} />
        </ReferenceInput>
        <NumberInput label="prices" source="prices" />
        <NumberInput step={1} label="productionDays" source="productionDays" />
        <ReferenceInput
          source="provider.id"
          reference="Provider"
          label="providerId"
        >
          <SelectInput optionText={ProviderTitle} />
        </ReferenceInput>
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
