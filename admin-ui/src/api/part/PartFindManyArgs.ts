import { PartWhereInput } from "./PartWhereInput";
import { PartOrderByInput } from "./PartOrderByInput";

export type PartFindManyArgs = {
  where?: PartWhereInput;
  orderBy?: PartOrderByInput;
  skip?: number;
  take?: number;
};
