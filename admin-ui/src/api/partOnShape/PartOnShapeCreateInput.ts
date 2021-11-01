import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";

export type PartOnShapeCreateInput = {
  did?: string | null;
  eid?: string | null;
  part?: PartWhereUniqueInput;
  wid?: string | null;
};
