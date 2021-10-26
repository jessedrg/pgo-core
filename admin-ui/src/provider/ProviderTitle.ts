import { Provider as TProvider } from "../api/provider/Provider";

export const PROVIDER_TITLE_FIELD = "name";

export const ProviderTitle = (record: TProvider): string => {
  return record.name || record.id;
};
