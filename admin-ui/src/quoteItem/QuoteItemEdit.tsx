import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PartTitle } from "../part/PartTitle";
import { ProviderTitle } from "../provider/ProviderTitle";
import { QuoteTitle } from "../quote/QuoteTitle";

export const QuoteItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Construction Type" source="constructionType" />
        <NumberInput label="Margins" source="margins" />
        <ReferenceInput source="part.id" reference="Part" label="Part">
          <SelectInput optionText={PartTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Production Days" source="productionDays" />
        <ReferenceInput
          source="provider.id"
          reference="Provider"
          label="Provider"
        >
          <SelectInput optionText={ProviderTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantities" source="quantities" />
        <ReferenceInput source="quote.id" reference="Quote" label="Quote">
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
