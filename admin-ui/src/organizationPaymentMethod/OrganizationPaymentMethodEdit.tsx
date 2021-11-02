import * as React from "react";
import { Edit, SimpleForm, EditProps, SelectInput } from "react-admin";

export const OrganizationPaymentMethodEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "BankAccount", value: "bankAccount" },
            { label: "Card", value: "card" },
            { label: "Deferred", value: "deferred" },
            { label: "Paypal", value: "paypal" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
