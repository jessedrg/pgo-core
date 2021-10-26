import { Shipment } from "../shipment/Shipment";

export type MediaFile = {
  createdAt: Date;
  id: string;
  labeIsInShipment?: Array<Shipment>;
  mediaFilesInShipment?: Array<Shipment>;
  type: string | null;
  updatedAt: Date;
  url: string | null;
};
