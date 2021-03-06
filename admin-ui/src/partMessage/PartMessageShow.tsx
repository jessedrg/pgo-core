import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PART_TITLE_FIELD } from "../part/PartTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";

export const PartMessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="message" source="message" />
        <ReferenceField label="part" source="part.id" reference="Part">
          <TextField source={PART_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="sender" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserType" source="userType" />
      </SimpleShowLayout>
    </Show>
  );
};
