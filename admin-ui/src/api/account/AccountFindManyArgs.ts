import { AccountWhereInput } from "./AccountWhereInput";
import { AccountOrderByInput } from "./AccountOrderByInput";

export type AccountFindManyArgs = {
  where?: AccountWhereInput;
  orderBy?: AccountOrderByInput;
  skip?: number;
  take?: number;
};
