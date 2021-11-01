import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ProductionTitle } from "../production/ProductionTitle";

export const ProductionItemCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="production.id"
          reference="Production"
          label="production"
        >
          <SelectInput optionText={ProductionTitle} />
        </ReferenceInput>
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
