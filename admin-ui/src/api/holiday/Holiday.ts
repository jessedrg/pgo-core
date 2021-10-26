import { Provider } from "../provider/Provider";

export type Holiday = {
  createdAt: Date;
  day: number | null;
  id: string;
  providersInHolidays?: Array<Provider>;
  updatedAt: Date;
};
