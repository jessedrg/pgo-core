import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";

export type AgentWhereInput = {
  account?: AccountWhereUniqueInput;
  id?: StringFilter;
  zones?: JsonNullableFilter;
};
