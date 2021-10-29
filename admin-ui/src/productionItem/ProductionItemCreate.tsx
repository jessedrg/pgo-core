import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const ProductionItemCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput
          step={1}
          label="shippedQuantity"
          source="shippedQuantity"
        />
      </SimpleForm>
    </Create>
  );
};
