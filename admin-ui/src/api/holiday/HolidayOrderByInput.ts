import { SortOrder } from "../../util/SortOrder";

export type HolidayOrderByInput = {
  createdAt?: SortOrder;
  day?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
