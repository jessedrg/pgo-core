import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="accountId"
          source="account.id"
          reference="Account"
        >
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <ReferenceField
          label="organizationId"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
