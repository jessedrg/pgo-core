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
import { ShipmentTitle } from "../shipment/ShipmentTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="comment" source="comment" />
        <TextInput label="customNo" source="customNo" />
        <NumberInput step={1} label="estimatedDays" source="estimatedDays" />
        <div />
        <ReferenceInput source="payment.id" reference="Payment" label="payment">
          <SelectInput optionText={PaymentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="shipment.id"
          reference="Shipment"
          label="shipment"
        >
          <SelectInput optionText={ShipmentTitle} />
        </ReferenceInput>
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
    </Edit>
  );
};
