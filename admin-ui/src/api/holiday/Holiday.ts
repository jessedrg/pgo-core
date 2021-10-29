import { Provider } from "../provider/Provider";

export type Holiday = {
  createdAt: Date;
  day: number | null;
  id: string;
  provider?: Provider | null;
  updatedAt: Date;
};
