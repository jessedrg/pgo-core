import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { OrderTitle } from "../order/OrderTitle";
import { PartTitle } from "../part/PartTitle";

export const OrderItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="order.id" reference="Order" label="orderId">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <ReferenceInput source="part.id" reference="Part" label="partId">
          <SelectInput optionText={PartTitle} />
        </ReferenceInput>
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="total" source="total" />
      </SimpleForm>
    </Edit>
  );
};
