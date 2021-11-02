import * as React from "react";
import { Create, SimpleForm, CreateProps, SelectInput } from "react-admin";

export const OrganizationPaymentMethodCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
