import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";

export type PartOnShapeUpdateInput = {
  did?: string | null;
  eid?: string | null;
  part?: PartWhereUniqueInput;
  wid?: string | null;
};
