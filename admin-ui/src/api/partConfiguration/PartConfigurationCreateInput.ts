import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";

export type PartConfigurationCreateInput = {
  colorFinish?: string | null;
  finish?: string | null;
  hardness?: string | null;
  material?: string | null;
  materialType?: string | null;
  part?: PartWhereUniqueInput;
  tech?: string | null;
  tolerance?: number | null;
  weight?: number | null;
};
