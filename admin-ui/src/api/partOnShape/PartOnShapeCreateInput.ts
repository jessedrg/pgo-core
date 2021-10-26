import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";

export type PartOnShapeCreateInput = {
  did?: string | null;
  eid?: string | null;
  partId?: PartWhereUniqueInput | null;
  wid?: string | null;
};
