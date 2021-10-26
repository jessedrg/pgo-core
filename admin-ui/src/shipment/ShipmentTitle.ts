import { Shipment as TShipment } from "../api/shipment/Shipment";

export const SHIPMENT_TITLE_FIELD = "courier";

export const ShipmentTitle = (record: TShipment): string => {
  return record.courier || record.id;
};
