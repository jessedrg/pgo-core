import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type PartMessageUpdateInput = {
  message?: string | null;
  messageType?: string | null;
  part?: PartWhereUniqueInput | null;
  sender?: AccountWhereUniqueInput | null;
  type?: string | null;
};
