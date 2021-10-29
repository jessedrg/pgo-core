import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const OrderItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="total" source="total" />
      </SimpleForm>
    </Edit>
  );
};
