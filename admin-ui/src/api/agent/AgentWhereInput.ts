import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";

export type AgentWhereInput = {
  accountId?: AccountWhereUniqueInput;
  id?: StringFilter;
  zones?: JsonNullableFilter;
};
