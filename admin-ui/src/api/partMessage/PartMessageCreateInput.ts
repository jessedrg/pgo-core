import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type PartMessageCreateInput = {
  message?: string | null;
  messageType?: string | null;
  part?: PartWhereUniqueInput | null;
  reciever?: AccountWhereUniqueInput | null;
  sender?: AccountWhereUniqueInput | null;
  type?: string | null;
};
