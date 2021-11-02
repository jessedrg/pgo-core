import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { PartTitle } from "../part/PartTitle";
import { ProductionTitle } from "../production/ProductionTitle";

export const ProductionItemCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="part.id" reference="Part" label="Part">
          <SelectInput optionText={PartTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="production.id"
          reference="Production"
          label="Production"
        >
          <SelectInput optionText={ProductionTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput
          step={1}
          label="Shipped Quantity"
          source="shippedQuantity"
        />
      </SimpleForm>
    </Create>
  );
};
