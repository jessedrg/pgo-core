import { MediaFile as TMediaFile } from "../api/mediaFile/MediaFile";

export const MEDIAFILE_TITLE_FIELD = "fileName";

export const MediaFileTitle = (record: TMediaFile): string => {
  return record.fileName || record.id;
};
