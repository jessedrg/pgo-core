import { SortOrder } from "../../util/SortOrder";

export type PartOrderByInput = {
  accountId?: SortOrder;
  blueprintId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  offerId?: SortOrder;
  organizationId?: SortOrder;
  originalBlueprintId?: SortOrder;
  originalModelId?: SortOrder;
  partConfigurationId?: SortOrder;
  partOnShapeId?: SortOrder;
  partsCount?: SortOrder;
  process?: SortOrder;
  quantities?: SortOrder;
  status?: SortOrder;
  stepModelId?: SortOrder;
  stlModelId?: SortOrder;
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
