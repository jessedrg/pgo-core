import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { PartTitle } from "../part/PartTitle";

export const ProductionItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="part.id" reference="Part" label="part">
          <SelectInput optionText={PartTitle} />
        </ReferenceInput>
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
