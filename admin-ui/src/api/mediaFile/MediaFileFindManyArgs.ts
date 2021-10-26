import { MediaFileWhereInput } from "./MediaFileWhereInput";
import { MediaFileOrderByInput } from "./MediaFileOrderByInput";

export type MediaFileFindManyArgs = {
  where?: MediaFileWhereInput;
  orderBy?: MediaFileOrderByInput;
  skip?: number;
  take?: number;
};
