import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const ProductionItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput
          step={1}
          label="shippedQuantity"
          source="shippedQuantity"
        />
      </SimpleForm>
    </Edit>
  );
};
