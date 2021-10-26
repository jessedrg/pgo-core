import { PartMessage as TPartMessage } from "../api/partMessage/PartMessage";

export const PARTMESSAGE_TITLE_FIELD = "message";

export const PartMessageTitle = (record: TPartMessage): string => {
  return record.message || record.id;
};
