import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
} from "react-admin";

import { PaymentTitle } from "../payment/PaymentTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Comment" source="comment" />
        <TextInput label="Custom Code" source="customCode" />
        <NumberInput step={1} label="Estimated Days" source="estimatedDays" />
        <div />
        <ReferenceInput source="payment.id" reference="Payment" label="Payment">
          <SelectInput optionText={PaymentTitle} />
        </ReferenceInput>
        <div />
        <SelectArrayInput
          label="Status"
          source="status"
          choices={[
            { label: "OnHold", value: "onHold" },
            { label: "Failed", value: "failed" },
            { label: "Processing", value: "processing" },
            { label: "Production", value: "production" },
            { label: "Quality", value: "quality" },
            { label: "Shipped", value: "shipped" },
            { label: "Completed", value: "completed" },
            { label: "Cancelled", value: "cancelled" },
            { label: "Refound", value: "refound" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput label="Subtotal" source="subtotal" />
        <div />
        <NumberInput label="Total" source="total" />
      </SimpleForm>
    </Edit>
  );
};
