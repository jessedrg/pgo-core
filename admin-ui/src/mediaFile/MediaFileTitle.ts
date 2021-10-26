import { MediaFile as TMediaFile } from "../api/mediaFile/MediaFile";

export const MEDIAFILE_TITLE_FIELD = "type";

export const MediaFileTitle = (record: TMediaFile): string => {
  return record.type || record.id;
};
