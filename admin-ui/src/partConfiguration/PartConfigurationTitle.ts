import { PartConfiguration as TPartConfiguration } from "../api/partConfiguration/PartConfiguration";

export const PARTCONFIGURATION_TITLE_FIELD = "colorFinish";

export const PartConfigurationTitle = (record: TPartConfiguration): string => {
  return record.colorFinish || record.id;
};
