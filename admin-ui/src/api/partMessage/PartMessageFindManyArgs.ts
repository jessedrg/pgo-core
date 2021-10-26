import { PartMessageWhereInput } from "./PartMessageWhereInput";
import { PartMessageOrderByInput } from "./PartMessageOrderByInput";

export type PartMessageFindManyArgs = {
  where?: PartMessageWhereInput;
  orderBy?: PartMessageOrderByInput;
  skip?: number;
  take?: number;
};
