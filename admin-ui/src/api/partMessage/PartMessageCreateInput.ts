import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type PartMessageCreateInput = {
  message?: string | null;
  part?: PartWhereUniqueInput | null;
  sender?: AccountWhereUniqueInput | null;
  type?: string | null;
  userType?: "Agent" | "Client" | "Provider" | null;
};
