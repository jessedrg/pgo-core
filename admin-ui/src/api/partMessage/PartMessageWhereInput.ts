import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type PartMessageWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  part?: PartWhereUniqueInput;
  sender?: AccountWhereUniqueInput;
  type?: StringNullableFilter;
  userType?: "Agent" | "Client" | "Provider";
};
