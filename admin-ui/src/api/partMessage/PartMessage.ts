import { Part } from "../part/Part";
import { Account } from "../account/Account";

export type PartMessage = {
  createdAt: Date;
  id: string;
  message: string | null;
  messageType: string | null;
  part?: Part | null;
  reciever?: Account | null;
  sender?: Account | null;
  type: string | null;
  updatedAt: Date;
};
