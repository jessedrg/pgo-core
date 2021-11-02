import { Provider } from "../provider/Provider";

export type Holiday = {
  createdAt: Date;
  day: Date | null;
  id: string;
  provider?: Provider | null;
  updatedAt: Date;
};
