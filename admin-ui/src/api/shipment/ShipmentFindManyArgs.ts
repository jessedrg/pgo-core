import { ShipmentWhereInput } from "./ShipmentWhereInput";
import { ShipmentOrderByInput } from "./ShipmentOrderByInput";

export type ShipmentFindManyArgs = {
  where?: ShipmentWhereInput;
  orderBy?: ShipmentOrderByInput;
  skip?: number;
  take?: number;
};
