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
        <ReferenceInput source="part.id" reference="Part" label="partId">
          <SelectInput optionText={PartTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="production.id"
          reference="Production"
          label="productionId"
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
