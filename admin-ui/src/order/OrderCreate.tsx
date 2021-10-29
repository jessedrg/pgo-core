import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectArrayInput,
} from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="comment" source="comment" />
        <TextInput label="customNo" source="customNo" />
        <NumberInput step={1} label="estimatedDays" source="estimatedDays" />
        <div />
        <div />
        <SelectArrayInput
          label="state"
          source="state"
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
        <NumberInput label="subtotal" source="subtotal" />
        <div />
        <NumberInput label="total" source="total" />
      </SimpleForm>
    </Create>
  );
};
