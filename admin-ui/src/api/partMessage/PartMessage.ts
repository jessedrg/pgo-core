import { Part } from "../part/Part";
import { Account } from "../account/Account";

export type PartMessage = {
  createdAt: Date;
  id: string;
  message: string | null;
  part?: Part | null;
  sender?: Account | null;
  type: string | null;
  updatedAt: Date;
  userType?: "Agent" | "Client" | "Provider" | null;
};
