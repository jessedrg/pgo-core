import { SessionWhereInput } from "./SessionWhereInput";
import { SessionOrderByInput } from "./SessionOrderByInput";

export type SessionFindManyArgs = {
  where?: SessionWhereInput;
  orderBy?: SessionOrderByInput;
  skip?: number;
  take?: number;
};
