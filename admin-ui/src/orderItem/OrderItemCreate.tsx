import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const OrderItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="total" source="total" />
      </SimpleForm>
    </Create>
  );
};
