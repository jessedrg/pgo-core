import { Part } from "../part/Part";
import { Account } from "../account/Account";

export type PartMessage = {
  createdAt: Date;
  id: string;
  message: string | null;
  messageType: string | null;
  partId?: Part | null;
  recieverId?: Account | null;
  senderId?: Account | null;
  type: string | null;
  updatedAt: Date;
};
