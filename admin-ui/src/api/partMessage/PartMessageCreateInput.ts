import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type PartMessageCreateInput = {
  message?: string | null;
  messageType?: string | null;
  partId?: PartWhereUniqueInput | null;
  recieverId?: AccountWhereUniqueInput | null;
  senderId?: AccountWhereUniqueInput | null;
  type?: string | null;
};
