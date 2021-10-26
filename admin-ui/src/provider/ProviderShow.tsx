import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { PART_TITLE_FIELD } from "../part/PartTitle";
import { PROVIDER_TITLE_FIELD } from "./ProviderTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { HOLIDAY_TITLE_FIELD } from "../holiday/HolidayTitle";

export const ProviderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="dateFormat" source="dateFormat" />
        <ReferenceField
          label="holidaysId"
          source="holiday.id"
          reference="Holiday"
        >
          <TextField source={HOLIDAY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="rating" source="rating" />
        <TextField label="ratingData" source="ratingData" />
        <TextField label="shippmentDates" source="shippmentDates" />
        <TextField label="techologies" source="technologies" />
        <TextField label="typeson" source="typeson" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="workingDays" source="workingDays" />
        <ReferenceManyField
          reference="Production"
          target="ProviderId"
          label="Productions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <BooleanField label="discomformity" source="discomformity" />
            <TextField label="ID" source="id" />
            <ReferenceField label="orderId" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="partId" source="part.id" reference="Part">
              <TextField source={PART_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="providerId"
              source="provider.id"
              reference="Provider"
            >
              <TextField source={PROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="QuoteItem"
          target="ProviderId"
          label="QuoteItems"
        >
          <Datagrid rowClick="show">
            <TextField label="basePrices" source="basePrices" />
            <TextField label="constructionType" source="constructionType" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="margins" source="margins" />
            <ReferenceField label="partId" source="part.id" reference="Part">
              <TextField source={PART_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="prices" source="prices" />
            <TextField label="productionDays" source="productionDays" />
            <ReferenceField
              label="providerId"
              source="provider.id"
              reference="Provider"
            >
              <TextField source={PROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantities" source="quantities" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Quote"
          target="ProviderId"
          label="Quotes"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="accountId"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="completedAt" source="completedAt" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="providerId"
              source="provider.id"
              reference="Provider"
            >
              <TextField source={PROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
