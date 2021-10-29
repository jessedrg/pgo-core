import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { OFFER_TITLE_FIELD } from "../offer/OfferTitle";
import { PARTONSHAPE_TITLE_FIELD } from "../partOnShape/PartOnShapeTitle";
import { QUOTE_TITLE_FIELD } from "../quote/QuoteTitle";

export const PartList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Parts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="offer" source="offer.id" reference="Offer">
          <TextField source={OFFER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="partonshape"
          source="partonshape.id"
          reference="PartOnShape"
        >
          <TextField source={PARTONSHAPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="parts" source="parts" />
        <TextField label="process" source="process" />
        <TextField label="quantities" source="quantities" />
        <ReferenceField label="quote" source="quote.id" reference="Quote">
          <TextField source={QUOTE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <TextField label="surface" source="surface" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="visible" source="visible" />
        <TextField label="volume" source="volume" />
        <TextField label="volumeBoundingBox" source="volumeBoundingBox" />
        <TextField label="volumeChips" source="volumeChips" />
        <TextField label="x" source="x" />
        <TextField label="y" source="y" />
        <TextField label="z" source="z" />
      </Datagrid>
    </List>
  );
};
