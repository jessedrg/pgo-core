import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AgentWhereInput = {
  account?: AccountWhereUniqueInput;
  id?: StringFilter;
};
