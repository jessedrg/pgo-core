import { StringFilter } from "../../util/StringFilter";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";

export type AgentWhereInput = {
  id?: StringFilter;
  zones?: JsonNullableFilter;
};
