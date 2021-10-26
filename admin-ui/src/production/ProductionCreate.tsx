import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrderTitle } from "../order/OrderTitle";
import { PartTitle } from "../part/PartTitle";
import { ProviderTitle } from "../provider/ProviderTitle";

export const ProductionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="discomformity" source="discomformity" />
        <ReferenceInput source="order.id" reference="Order" label="orderId">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <ReferenceInput source="part.id" reference="Part" label="partId">
          <SelectInput optionText={PartTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="provider.id"
          reference="Provider"
          label="providerId"
        >
          <SelectInput optionText={ProviderTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Pending", value: "pending" },
            { label: "Processing", value: "processing" },
            { label: "Shipped", value: "shipped" },
            { label: "Quality", value: "quality" },
            { label: "Completed", value: "completed" },
            { label: "Canceled", value: "canceled" },
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
