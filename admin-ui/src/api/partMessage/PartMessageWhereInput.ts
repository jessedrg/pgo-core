import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type PartMessageWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  messageType?: StringNullableFilter;
  part?: PartWhereUniqueInput;
  reciever?: AccountWhereUniqueInput;
  sender?: AccountWhereUniqueInput;
  type?: StringNullableFilter;
};
