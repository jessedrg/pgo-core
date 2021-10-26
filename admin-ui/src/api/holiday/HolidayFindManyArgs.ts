import { HolidayWhereInput } from "./HolidayWhereInput";
import { HolidayOrderByInput } from "./HolidayOrderByInput";

export type HolidayFindManyArgs = {
  where?: HolidayWhereInput;
  orderBy?: HolidayOrderByInput;
  skip?: number;
  take?: number;
};
