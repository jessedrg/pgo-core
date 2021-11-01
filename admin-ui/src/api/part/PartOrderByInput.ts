import { SortOrder } from "../../util/SortOrder";

export type PartOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  offerId?: SortOrder;
  partConfigurationId?: SortOrder;
  partOnShapeId?: SortOrder;
  parts?: SortOrder;
  process?: SortOrder;
  quantities?: SortOrder;
  status?: SortOrder;
  surface?: SortOrder;
  updatedAt?: SortOrder;
  visible?: SortOrder;
  volume?: SortOrder;
  volumeBoundingBox?: SortOrder;
  volumeChips?: SortOrder;
  x?: SortOrder;
  y?: SortOrder;
  z?: SortOrder;
};
