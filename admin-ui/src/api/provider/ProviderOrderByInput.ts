import { SortOrder } from "../../util/SortOrder";

export type ProviderOrderByInput = {
  createdAt?: SortOrder;
  currency?: SortOrder;
  dateFormat?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  rating?: SortOrder;
  ratingData?: SortOrder;
  shipmentDates?: SortOrder;
  technologies?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
  workingDays?: SortOrder;
};
